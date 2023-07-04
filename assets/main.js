const API = 'https://youtube-v3-alternative.p.rapidapi.com/playlist?id=UCAVgrQkzMkYPp5M4QVifmaA';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7801d825cbmsh5573fca5f0e1707p1f1430jsn64ca47a7e0eb',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async () => {
try {
const videos = await fetchData(API);
let view = `
${videos.data.map(video => `
    <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.thumbnail[0].url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.title}
                </h3>
        </div>    
    </div>
`).slice(8,16).join('')}
`;
content.innerHTML = view;
}catch (error) {
console.log(error);
}
})();




