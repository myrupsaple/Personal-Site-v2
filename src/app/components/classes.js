export const basePageClasses = {
    sideBar: "static w-full",
    main: "w-full"
};

export const navBarClasses = {
    default: "px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-4",
    beforeTrigger: "bg-transparent",
    midTrigger: "sticky transition-all top-[-8rem] duration-100",
    afterTrigger: "bg-white h-full sticky top-0 transition-all duration-300",
    leftSide: `text-teal mr-10 cursor-pointer text-4xl hover:text-[2.6rem] hover:text-coral duration-300`,
    rightSide: 
        `flex flex-row ml-auto items-center
        mr-0 sm:mr-2 md:mr-6
        gap-x-2 sm:gap-x-6 md:gap-x-10`,
    rightSideItems: {
        coral: "hover-text-coral text-sm hover:text-base md:text-base md:hover:text-lg",
        teal: "hover-text-teal text-sm hover:text-base md:text-base md:hover:text-lg",
    }
}

export const sideBarClasses = {
    menuItems: {
        tier1: "ml-2 text-[#EED6C6] hover:text-[#FFF1E3] duration-300",
        tier2: "ml-6 text-[#DEAD8E] hover:text-[#FFF1E3] duration-300",
        tier3: "ml-10"
    }
}

export const uclaClasses = {
    title: "bold text-fedBlue",
    date: "font-bold",
    subtitle: "italic"
}

export const workExperienceClasses = {
    position: "bold",
    content: ""
}

export const softwareProjectClasses = {
    utilized: "bold",
    content: ""
}

export const otherWorksClasses = {
    title: "bold text-fedBlue",
    description: "font-bold ml-4",
    date: "italic ml-4"
}

export const imgClasses = {
    imgBox: "grid grid-cols-1 gap-y-2 lg:flex lg:flex-row lg:gap-x-4 justify-center justify-items-center",
    imgSingle: "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",
    imgDuo: "max-w-sm sm:max-w-md md:max-w-xl lg:max-w-md xl:max-w-xl"
}