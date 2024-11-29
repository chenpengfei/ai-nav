export async function onRequest(context) {
    const aiTools = {
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
            }
        ],
        "AI 开发": [
            {
                name: "GitHub Copilot",
                description: "GitHub 和 OpenAI 合作开发的 AI 编程助手",
                icon: "https://github.com/github.png",
                url: "https://github.com/features/copilot"
            }
        ]
    };

    return new Response(JSON.stringify(aiTools), {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600'
        },
    });
}
