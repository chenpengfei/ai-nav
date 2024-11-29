async function fetchTools() {
    try {
        const response = await fetch('/api/tools');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching tools:', error);
        return {};
    }
}

async function renderTools(tools = null) {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    const aiTools = tools || await fetchTools();
    container.innerHTML = '';

    for (const [category, items] of Object.entries(aiTools)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        
        categoryDiv.innerHTML = `
            <h2>${category}</h2>
            <div class="tools">
                ${items.map(tool => `
                    <a href="${tool.url}" class="tool" target="_blank" rel="noopener noreferrer">
                        <img src="${tool.icon}" alt="${tool.name}" 
                             onerror="this.src='images/favicon.ico'">
                        <div class="tool-info">
                            <h3>${tool.name}</h3>
                            <p>${tool.description}</p>
                        </div>
                    </a>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categoryDiv);
    }
}

async function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const aiTools = await fetchTools();
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredTools = {};
        for (const [category, tools] of Object.entries(aiTools)) {
            const filteredCategoryTools = tools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm)
            );
            
            if (filteredCategoryTools.length > 0) {
                filteredTools[category] = filteredCategoryTools;
            }
        }
        
        renderTools(filteredTools);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await renderTools();
    await setupSearch();
});
