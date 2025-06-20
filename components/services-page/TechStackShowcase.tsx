import React from "react";
import Image from "next/image";

import appstoreEditorChoice from "@/public/assets/image/icons/appstore-editor-choice.svg";
import appOfTheDay from "@/public/assets/image/icons/app-of-the-day.svg";
import microsoft from "@/public/assets/image/icons/microsoft.svg";
import theWebby from "@/public/assets/image/icons/the-webby.svg";

const TechStackShowcase: React.FC = () => {
  return (
    <section className="embla w-full mx-auto py-12 lg:py-12 bg-[#101010] xl:py-0 2xl:py-12 overflow-hidden px-4 text-white">
        <div className="tree hidden lg:block">
            <ul className="flex items-center justify-center realative">
                <li className="relative"> <a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px]">Start</a>
                    <span className="start-circle"></span>
                    <div className="rounded-dots">
                        <div className="flex items-center justify-center  ">
                            <span className="circle-1"></span>
                            <span className="circle-2"></span>
                        </div>

                    </div>

                    <ul className="pt-26 flex">
                        
                        <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px]">Frontend</a>
                            <span className="rounded-left-after ">
                                <span className="rounded-left"></span>
                                <span className="ic-green-arrow"></span>
                            </span>
                            <ul className="">
                                <li className="relative px-10 pt-26"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 45 45" fill="none">
                                        <path d="M22.586 15.8013L17.8018 7.60449L3.44824 7.60449L22.586 40.3919L41.7237 7.60449L27.3702 7.60449L22.586 15.8013Z" fill="#005C1E"/>
                                        <path d="M27.3699 7.60449L22.5856 15.8013L17.8014 7.60449L10.8906 7.60449L22.5856 27.6413L34.2807 7.60449L27.3699 7.60449Z" fill="#00CE44"/>
                                    </svg>
                                     Vue.js
                                    </a>
                                    <ul className="">
                                        <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 45" fill="none">
                                                <path d="M21.8841 2.04396C21.7881 2.04439 21.6912 2.06029 21.599 2.09177L3.2982 8.46152C2.91 8.59617 2.66689 8.9839 2.7176 9.39222L5.61034 33.1072C5.64444 33.3878 5.81027 33.6351 6.05945 33.7698L21.4897 42.1563C21.6191 42.2271 21.763 42.2622 21.9063 42.2622C22.0506 42.2622 22.1961 42.2263 22.3264 42.1546L37.8352 33.6536C38.0818 33.5181 38.2494 33.2717 38.2826 32.9927L41.1736 9.27951C41.2243 8.86944 40.9788 8.4783 40.5862 8.3454L22.1676 2.08836C22.0758 2.05775 21.9802 2.04352 21.8841 2.04396ZM21.9456 6.41398L33.3117 30.8957H29.4319L27.0002 25.6564H16.891L14.4593 30.8957H10.5796L21.9456 6.41398ZM21.9456 14.7203L18.5184 22.1522H25.3728L21.9456 14.7203Z" fill="#00CE44"/>
                                            </svg>
                                            Angular
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="relative px-10 pt-28"> <a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px]">Cloud & Backend</a>
                            <span className="ic-cc-green-arrow"></span>
                            <span className="cc-line"></span>
                            <ul className="">
                                <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 36 29" fill="none">
                                        <path d="M30.9464 10.6802C30.2443 8.1728 28.8345 5.96504 26.942 4.27734L22.7545 8.46516C24.2817 9.7084 25.3118 11.5382 25.4994 13.6093V14.9828C25.5231 14.9828 25.5449 14.9755 25.5686 14.9755C27.6833 14.9755 29.4046 16.6969 29.4046 18.8118C29.4046 20.9266 27.6833 22.6489 25.5686 22.6489C25.5449 22.6489 25.5231 22.6426 25.4994 22.6416V22.6489H19.4285H18.0205V28.5691H25.4994V28.5654C25.5231 28.5654 25.5449 28.5691 25.5686 28.5691C30.9483 28.5691 35.3243 24.1918 35.3243 18.8127C35.3243 15.42 33.5812 12.4289 30.9464 10.6802Z" fill="#00CE44"/>
                                        <path opacity="0.5" d="M13.977 17.2668L18.2756 12.9679C18.272 12.9633 18.2683 12.9597 18.2656 12.9561L13.9697 17.2523C13.9715 17.2568 13.9743 17.2614 13.977 17.2668Z" fill="#00CE44"/>
                                        <path opacity="0.5" d="M13.977 17.2668L18.2756 12.9679C18.272 12.9633 18.2683 12.9597 18.2656 12.9561L13.9697 17.2523C13.9715 17.2568 13.9743 17.2614 13.977 17.2668Z" fill="#00CE44"/>
                                        <path d="M18.0201 0.859375C10.6132 0.859375 4.58691 6.88608 4.58691 14.2936C4.58691 14.5058 4.60877 14.7125 4.61879 14.922L10.5385 14.922C10.5212 14.7143 10.5066 14.5058 10.5066 14.2936C10.5066 10.1504 13.8772 6.77952 18.0201 6.77952C19.8133 6.77952 21.4608 7.41343 22.7541 8.4654L26.9416 4.27758C24.5664 2.15908 21.4454 0.859375 18.0201 0.859375Z" fill="#00CE44"/>
                                        <path opacity="0.5" d="M10.4726 22.6493H10.4707C9.9143 22.6493 9.38881 22.5245 8.91159 22.3096L4.62207 26.5994C6.255 27.8299 8.27681 28.5694 10.4707 28.5694H10.4726H18.0207V22.6493L10.4726 22.6493Z" fill="#00CE44"/>
                                        <path d="M10.4726 22.6493H10.4707C9.9143 22.6493 9.38881 22.5245 8.91159 22.3096L4.62207 26.5994C6.255 27.8299 8.27681 28.5694 10.4707 28.5694H10.4726H18.0207V22.6493L10.4726 22.6493Z" fill="#00CE44"/>
                                        <path d="M6.63651 18.8151C6.63651 16.7021 8.35778 14.9807 10.4707 14.9807C12.0216 14.9807 13.365 15.9124 13.9688 17.2522L18.2647 12.956C16.4787 10.5861 13.6518 9.06055 10.4698 9.06055C5.09739 9.06055 0.716797 13.4323 0.716797 18.8151C0.716797 21.9947 2.25683 24.8172 4.62199 26.5997L8.9115 22.3098C7.57456 21.7105 6.63651 20.3717 6.63651 18.8151Z" fill="#00CE44"/>
                                    </svg>
                                    G Cloud
                                </a>
                                <ul className="">
                                <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 45 45" fill="none">
                                        <g clip-path="url(#clip0_238_740)">
                                        <path d="M16.3846 9.93358L5.41895 28.8773L10.8926 3.0246C11.0693 2.19218 12.1896 2.0337 12.5885 2.78599L16.3846 9.93358ZM18.4065 13.7223L20.5923 17.8207L10.5192 27.3472L18.4065 13.7223ZM26.5851 12.1376L23.3246 15.2342L20.5559 10.0247L22.3282 6.97545C22.6889 6.35432 23.5923 6.37618 23.9239 7.0137L26.5851 12.1376ZM39.2812 35.0704L23.2517 44.3965C22.9785 44.5787 22.6506 44.6515 22.341 44.6515C22.0313 44.6515 21.7034 44.5787 21.4302 44.4147L6.76688 35.9447L34.7583 9.41809C35.2884 8.91536 36.1627 9.21044 36.2829 9.92994L40.1555 33.1942C40.283 33.941 39.9369 34.6879 39.2812 35.0704Z" fill="#00CE44"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_238_740">
                                        <rect width="43.7167" height="43.7162" fill="white" transform="translate(0.791992 0.935547)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    Firebase
                                </a></li>
                            </ul>
                            </li>
                            </ul>
                        </li>
                        <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px]">Backend</a>
                            <span className="rounded-right-after ">
                                <span className="rounded-right"></span>
                                <span className="ic-cr-green-arrow"></span>
                            </span>
                            <ul className="">
                                <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 45 45" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.4045 11.915C40.4179 11.9656 40.4247 12.0178 40.4248 12.0703V20.2269C40.4248 20.3316 40.3979 20.4344 40.3467 20.525C40.2955 20.6156 40.2219 20.6908 40.1333 20.7428L33.4567 24.6844V32.4968C33.4567 32.7094 33.3465 32.9056 33.1667 33.0127L19.2297 41.2392C19.1978 41.2577 19.163 41.2696 19.1282 41.2823C19.1151 41.2867 19.1028 41.2949 19.089 41.2986C18.9916 41.3249 18.8892 41.3249 18.7917 41.2986C18.7758 41.2942 18.7613 41.2852 18.7461 41.2793C18.7142 41.2674 18.6808 41.257 18.6504 41.2392L4.71626 33.0127C4.62774 32.9605 4.55419 32.8854 4.50302 32.7948C4.45185 32.7042 4.42487 32.6014 4.4248 32.4968L4.4248 8.02697C4.4248 7.97344 4.43205 7.9214 4.44511 7.87085C4.44946 7.85375 4.45961 7.83814 4.46541 7.82104C4.47628 7.78982 4.48643 7.75786 4.50238 7.72886C4.51326 7.70953 4.52921 7.69392 4.54226 7.67608C4.55893 7.65229 4.57416 7.62776 4.59373 7.60695C4.61041 7.58985 4.63216 7.57721 4.65101 7.56234C4.67204 7.5445 4.69089 7.52517 4.71481 7.51105L11.683 3.39781C11.7712 3.34576 11.8712 3.31836 11.973 3.31836C12.0747 3.31836 12.1747 3.34576 12.263 3.39781L19.2304 7.51105H19.2318C19.255 7.52591 19.2746 7.5445 19.2956 7.5616C19.3145 7.57647 19.3355 7.58985 19.3522 7.6062C19.3725 7.62776 19.387 7.65229 19.4044 7.67608C19.4167 7.69392 19.4334 7.70953 19.4435 7.72886C19.4602 7.7586 19.4696 7.78982 19.4812 7.82104C19.487 7.83814 19.4972 7.85375 19.5015 7.8716C19.5149 7.92226 19.5217 7.97449 19.5218 8.02697L19.5218 23.3106L25.3278 19.8827L25.3278 12.0696C25.3278 12.0175 25.335 11.9648 25.3481 11.915C25.3531 11.8971 25.3626 11.8815 25.3684 11.8644C25.38 11.8332 25.3901 11.8012 25.4061 11.7722C25.417 11.7529 25.4329 11.7373 25.4452 11.7194C25.4626 11.6957 25.4771 11.6711 25.4974 11.6503C25.5141 11.6332 25.5351 11.6206 25.554 11.6057C25.5757 11.5879 25.5946 11.5685 25.6178 11.5544L32.5866 7.44117C32.6748 7.38904 32.7749 7.3616 32.8767 7.3616C32.9785 7.3616 33.0785 7.38904 33.1667 7.44117L40.1341 11.5544C40.1587 11.5693 40.1776 11.5879 40.1993 11.605C40.2174 11.6198 40.2385 11.6332 40.2551 11.6496C40.2755 11.6711 40.29 11.6957 40.3074 11.7194C40.3204 11.7373 40.3364 11.7529 40.3465 11.7722C40.3632 11.8012 40.3726 11.8332 40.3842 11.8644C40.3907 11.8815 40.4002 11.8971 40.4045 11.915ZM39.2633 19.8827V13.0999L36.8251 14.5392L33.4567 16.5278V23.3106L39.2641 19.8827H39.2633ZM32.2959 32.1526V25.3653L28.9826 27.3056L19.5211 32.8424V39.6936L32.2959 32.1526ZM5.58628 9.05658L5.58628 32.1526L18.3596 39.6929V32.8432L11.6866 28.9708L11.6844 28.9693L11.6815 28.9678C11.659 28.9545 11.6402 28.9351 11.6191 28.9188C11.601 28.9039 11.58 28.892 11.564 28.8757L11.5626 28.8734C11.5437 28.8548 11.5307 28.8318 11.5147 28.811C11.5002 28.7909 11.4828 28.7738 11.4712 28.753L11.4705 28.7508C11.4575 28.7285 11.4495 28.7017 11.4401 28.6764C11.4306 28.6541 11.4183 28.6333 11.4125 28.6095C11.4053 28.5813 11.4038 28.5508 11.4009 28.5218C11.398 28.4995 11.3922 28.4772 11.3922 28.4549L11.3922 12.4844L8.02451 10.4951L5.58628 9.05658ZM11.9737 4.60063L6.16847 8.02697L11.9722 11.4533L17.7767 8.02622L11.9722 4.60063H11.9737ZM14.9927 25.9838L18.3604 23.996L18.3604 9.05658L15.9221 10.4958L12.5537 12.4844L12.5537 27.4238L14.9927 25.9838ZM32.8767 8.64399L27.0722 12.0703L32.8767 15.4967L38.6804 12.0696L32.8767 8.64399ZM32.2959 16.5278L28.9275 14.5392L26.4893 13.0999L26.4893 19.8827L29.857 21.8706L32.2959 23.3106V16.5278ZM18.9396 31.8128L27.4535 26.8291L31.7094 24.3387L25.9092 20.9146L19.2311 24.8568L13.1446 28.4497L18.9396 31.8128Z" fill="#00CE44"/>
                                    </svg>
                                    Laravel
                                </a>
                                <ul className="">
                                <li className="relative px-10 pt-20"><a href="#" className="rounded-2xl text-lg text-[#00CE44] border-3 border-[#282727] bg-[#151515] px-3 py-2 w-[200px] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 45" fill="none">
                                        <path d="M21.9961 4.39258C21.4974 4.39258 20.9989 4.51489 20.5685 4.76079L7.02986 12.576C6.15553 13.0815 5.61035 14.0386 5.61035 15.0495L5.61035 29.2285C5.61035 30.2531 6.15553 31.1965 7.02986 31.7019L10.584 33.7511C12.3053 34.5982 12.9191 34.597 13.6978 34.597C16.2525 34.597 17.7135 33.0535 17.7135 30.3758L17.7135 15.7459C17.7135 15.5273 17.5372 15.3483 17.3186 15.3483H15.6109C15.3787 15.3483 15.2134 15.5273 15.2134 15.7459L15.2134 30.3625C15.2134 31.5647 13.9717 32.7392 11.9634 31.742L8.24658 29.5967C8.10996 29.5284 8.02778 29.3788 8.02778 29.2285L8.02778 15.0628C8.02778 14.8989 8.10996 14.7606 8.24658 14.6786L21.7853 6.86603C21.9082 6.78406 22.0729 6.78406 22.2095 6.86603L35.7482 14.6786C35.8848 14.7606 35.967 14.8992 35.967 15.0495V29.2285C35.967 29.3788 35.8845 29.5284 35.7615 29.5967L22.2095 37.4253C22.0866 37.4936 21.9082 37.4936 21.7853 37.4253L18.3005 35.3628C18.2049 35.2945 18.0706 35.2814 17.975 35.3361C17.005 35.8825 16.8274 35.9504 15.9258 36.2646C15.7072 36.3329 15.3655 36.4691 16.0485 36.8516L20.5685 39.5305C21.0057 39.7764 21.4989 39.9121 21.9907 39.9121C22.4962 39.9121 22.9864 39.7764 23.4236 39.5305L36.9783 31.7019C37.8526 31.1965 38.3978 30.2531 38.3978 29.2285L38.3978 15.0628C38.3978 14.0382 37.8526 13.0949 36.9783 12.5894L23.4236 4.76079C22.9932 4.51489 22.4947 4.39258 21.9961 4.39258ZM25.6382 15.3297C21.772 15.3297 19.4639 16.968 19.4639 19.7002C19.4639 22.6647 21.7569 23.4831 25.4728 23.852C29.9127 24.2892 30.2543 24.9468 30.2543 25.8212C30.2543 27.3239 29.0404 27.9664 26.1852 27.9664C22.5922 27.9664 21.7993 27.0635 21.5398 25.2875C21.5125 25.0963 21.3495 24.9593 21.1582 24.9593H19.3945C19.1759 24.9593 19.013 25.1386 19.013 25.3435C19.013 27.625 20.2561 30.3411 26.1852 30.3411C30.4749 30.3411 32.9332 28.6493 32.9332 25.6984C32.9332 22.7749 30.952 21.9947 26.7989 21.4346C22.5775 20.8881 22.1535 20.6011 22.1535 19.6175C22.1535 18.7978 22.5234 17.7204 25.6382 17.7204C28.4115 17.7204 29.4492 18.3196 29.8727 20.1912C29.9137 20.3688 30.063 20.506 30.2543 20.506H32.018C32.1273 20.506 32.2215 20.4519 32.3035 20.37C32.3718 20.3017 32.4132 20.1914 32.3995 20.0684C32.1263 16.8444 29.9825 15.3297 25.6382 15.3297Z" fill="#00CE44"/>
                                    </svg>
                                    Node.js
                                </a></li>
                            </ul>
                            </li>
                            </ul>
                        </li>
                    </ul>
                        
                </li>
            </ul>
        </div>
            
        <div className="text-white pt-10 lg:pt-0 pb-8 px-4 lg:px-8 xl:px-12 mt-[-50px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-2/5 shrink ">
                    <div className="bg-gradient01 row-span-3 rounded-4xl p-10">
                        <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-20">Always Evolving with Next-Gen Technologies!</h1>
                        <p>From backend APIs to intuitive mobile interfaces, our tech stack is carefully chosen to bring your app vision to life.</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/5 flex flex-col gap-10">
                    <div className="bg-gradient01 flex gap-2 justify-between rounded-4xl p-10">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl md:text-5xl  lg:text-4xl xl:text-5xl font-extrabold text-white mb-1">350+</h1>
                            <p>Application Launched!</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-1">425+</h1>
                            <p>Client Powered!</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-1">2.6 M</h1>
                            <p>Downloads on app store!</p>
                        </div>
                    </div>

                    <div className="bg-gradient01 flex flex-wrap gap-10 md:gap-1 justify-evenly items-center rounded-4xl py-10">
                        <a href="">
                            <Image src={appstoreEditorChoice} alt="App Store Editor's Choice" width={134.67} height={70} /> 
                        </a>
                        <a href="">
                            <Image src={appOfTheDay} alt="App of the Day" width={134.67} height={70} /> 
                        </a>
                        <a href="">
                            <Image src={microsoft} alt="Microsoft" width={134.67} height={70} /> 
                        </a>
                        <a href="">
                            <Image src={theWebby} alt="The Webby Awards" width={134.67} height={70} /> 
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default TechStackShowcase;
