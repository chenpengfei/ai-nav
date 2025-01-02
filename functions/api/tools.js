export async function onRequest(context) {
    const aiTools = {
        "AI 进展": [
            {
                name: "Ollama Blog",  
                description: "Ollama 的官方博客，提供最新的 AI 资讯和更新",
                icon: "https://ollama.com/favicon.ico",  
                url: "https://ollama.com/blog"  
            }
        ],
        "AI 对话": [
            {
                name: "ChatGPT",
                description: "OpenAI 开发的大型语言模型",
                icon: "https://chat.openai.com/favicon.ico",
                url: "https://chat.openai.com"
            },
            {
                name: "Claude",
                description: "Anthropic 开发的 AI 助手",
                icon: "https://claude.ai/favicon.ico",
                url: "https://claude.ai"
            },
            {
                name: "GenSpark",
                description: "基于 GPT-4 的智能助手",
                icon: "https://www.genspark.ai/favicon.ico",
                url: "https://www.genspark.ai"
            },
            {
                name: "Perplexity",
                description: "基于 AI 的智能搜索引擎",
                icon: "https://www.perplexity.ai/favicon.ico",
                url: "https://www.perplexity.ai"
            }
        ],
        "AI 办公": [
            {
                name: "豆包",
                description: "豆包的官方网站，提供各种服务和信息",
                icon: "https://www.doubao.com/favicon.ico",  // 请确认图标链接是否有效
                url: "https://www.doubao.com/"
            },
            {
                name: "NotebookLM",
                description: "Google 开发的 AI 笔记工具，支持智能笔记和文档管理",
                icon: "https://notebooklm.google/favicon.ico",  // 请确认图标链接是否有效
                url: "https://notebooklm.google/"
            },
            {
                name: "Notion AI",
                description: "集成 AI 功能的笔记和协作工具",
                icon: "https://www.notion.so/favicon.ico",
                url: "https://www.notion.so"
            },
            {
                name: "Copy.ai",
                description: "AI 文案写作助手",
                icon: "https://www.copy.ai/favicon.ico",
                url: "https://www.copy.ai"
            }
        ],
        "AI 学术": [
            {
                name: "arXiv",
                description: "康奈尔大学运营的开放获取学术论文预印本平台",
                icon: "https://arxiv.org/favicon.ico",
                url: "https://arxiv.org"
            }
        ],
        "AI 开发": [
            {
                name: "Semantic Kernel",
                description: "微软开发的 AI 编程框架，支持多种语言和 AI 模型集成",
                icon: "https://learn.microsoft.com/favicon.ico",
                url: "https://learn.microsoft.com/semantic-kernel"
            }
        ],
        "AI 绘画": [
            {
                name: "Midjourney",
                description: "AI 艺术和图像生成",
                icon: "https://www.midjourney.com/favicon.ico",
                url: "https://www.midjourney.com"
            },
            {
                name: "Stable Diffusion",
                description: "开源的 AI 图像生成模型",
                icon: "https://stability.ai/favicon.ico",
                url: "https://stability.ai"
            }
        ],
    };

    return new Response(JSON.stringify(aiTools), {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600'
        },
    });
}
