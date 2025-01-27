import logo from '../../imgs/logo.png';
import { createElement } from '../../utilis/utilis';

export default function nav() {
	const header = createElement({
		type: 'header',
		classes: 'text-primary container mx-auto min-h-10',
		content: `
        <div class="container mx-auto flex flex-wrap p-5 items-center justify-between md:justify-normal">
            <div class="relative flex w-20 h-10">
                <a href="#">
                    <img src="${logo}" alt="Icon" class="w-20 absolute">
                </a>
            </div>
                <nav class="ml-auto md:flex flex-wrap items-center text-base justify-center">
                    <a href="#hme" class="mr-5 cursor-pointer noice hover:noice">Restart</a>
                </nav>

                <div id="toggle"
                    class="w-12 h-6 flex items-center group relative bg-gray-800 dark:bg-gray-300 rounded-full p-1 cursor-pointer transform duration-200 ease-in-expo hover:scale-105">
                    <div id="circle"
                        class="w-5 h-5 bg-gray-300 dark:bg-gray-800 rounded-full shadow-md shadow-black duration-500 translate-x-5  ease-in-expo">
                    </div>
                    <span
                        class="absolute text-xs bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-700 p-1 min-w-20 text-center rounded-lg opacity-0  group-hover:opacity-100 -bottom-16 -left-1/3 transition-all duration-200 ease-in-expo"
                        x-show="showTooltip">
                        Toggle dark mode
                    </span>
                </div>
        </div>
        `,
	});

	return header;
}

//  Import this file into index to make it work
