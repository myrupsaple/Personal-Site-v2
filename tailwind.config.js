/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
          // Basic
          "white": "#ffffff",
          "black": "#000000",
          "transparent": "transparent",
          // New
          "teal": "#00B0B0",
          // Standard (0%)
          "mpLRed": "#d80000",
          "mpDRed": "#990000",
          "mpOrange": "#e26100",
          "mpSand": "#edeadd",
          "mpLYellow": "#ffeea6",
          "mpCYellow": "#000000",
          "mpYellow": "#eabc00", // Base: #ffcd00, -8%
          "mpEGreen": "#adce70", // Base: #99c24d, +20%
          "mpGreen": "#028a0f",
          "mpTeal": "#009285",
          "mpLBlue": "#007b9d",
          "mpBlue": "#00529e",
          "mpDBlue": "#00366b",
          "mpPurple": "#8950FC",
          "mpLGrey": "#404449",
          "mpDGrey": "#091823",
          // 25%
          "mpLRed-1": "#ff2222",
          "mpDRed-1": "#f20000",
          "mpOrange-1": "#ff8529",
          "mpSand-1": "#f1efe5",
          "mpLYellow-1": "#fff2bc",
          "mpYellow-1": "#fed52d", // 18%
          "mpEGreen-1": "#adce70", // 20%
          "mpGreen-1": "#03e518",
          "mpTeal-1": "#00edd7",
          "mpLBlue-1": "#00c0f5",
          "mpBlue-1": "#007ff6",
          "mpDBlue-1": "#0068cf",
          "mpPurple-1": "#a67bfc",
          "mpLGrey-1": "#6b727a",
          "mpDGrey-1": "#20577f",
          // 35%
          "mpLRed-2": "#ff3f3f",
          "mpDRed-2": "#ff1616",
          "mpOrange-2": "#ff9546",
          "mpSand-2": "#f3f1e8",
          "mpLYellow-2": "#fff3c5",
          "mpYellow-2": "#fed838", // 22%
          "mpEGreen-2": "#adce70", // 20%
          "mpGreen-2": "#11fb28",
          "mpTeal-2": "#12ffe9",
          "mpLBlue-2": "#19cdff",
          "mpBlue-2": "#1a90fe",
          "mpDBlue-2": "#007df8",
          "mpPurple-2": "#b28dfd",
          "mpLGrey-2": "#7d848d",
          "mpDGrey-2": "#2a70a4",
          // 50%
          "mpLRed-3": "#ff6b6b",
          "mpDRed-3": "#ff4c4c",
          "mpOrange-3": "#ffad71",
          "mpSand-3": "#f5f4ee",
          "mpLYellow-3": "#fef6d2",
          "mpYellow-3": "#ffdd54", // 33%
          "mpEGreen-3": "#adce70", // 20%
          "mpGreen-3": "#48fc59",
          "mpTeal-3": "#48ffee",
          "mpLBlue-3": "#4ed8fe",
          "mpBlue-3": "#4faafe",
          "mpDBlue-3": "#359bff",
          "mpPurple-3": "#c3a7fd",
          "mpLGrey-3": "#9ba1a7",
          "mpDGrey-3": "#4595cf",
          // 75%
          "mpLRed-4": "#ffb5b5",
          "mpDRed-4": "#ffa5a5",
          "mpOrange-4": "#ffd6b8",
          "mpSand-4": "#faf9f6",
          "mpLYellow-4": "#fffae8",
          "mpCYellow-4": "#ffe67f",
          "mpYellow-4": "#ffe67f", // 50%
          "mpEGreen-4": "#adce70", // 20%
          "mpGreen-4": "#a3fdac",
          "mpTeal-4": "#a3fff6",
          "mpLBlue-4": "#a6ebff",
          "mpBlue-4": "#a6d4ff",
          "mpDBlue-4": "#9acdff",
          "mpPurple-4": "#cfb8fd", // 60%
          "mpLGrey-4": "#cdd0d3",
          "mpDGrey-4": "#a2cae7",
          // 85%
          "mpLRed-5": "#ffd2d2",
          "mpDRed-5": "#ffc9c9",
          "mpOrange-5": "#ffe6d4",
          "mpSand-5": "#fcfbf9",
          "mpLYellow-5": "#fffcf1",
          "mpYellow-5": "#fff0b2", // 70%
          "mpEGreen-5": "#cbe0a5", // 50%
          "mpGreen-5": "#c8fecd",
          "mpTeal-5": "#c8fffa",
          "mpLBlue-5": "#caf3fe",
          "mpBlue-5": "#cae5ff",
          "mpDBlue-5": "#c2e1fe",
          "mpPurple-5": "#ede4fe",
          "mpLGrey-5": "#e1e2e4",
          "mpDGrey-5": "#c7dff0",
          // 92%
          "mpLRed-6": "#ffe7e7",
          "mpDRed-6": "#ffe2e2",
          "mpOrange-6": "#fff2e8",
          "mpSand-6": "#fdfdfc",
          "mpLYellow-6": "#fffdf7",
          "mpYellow-6": "#fef4cc", // 80%
          "mpEGreen-6": "#e5efd2", // 75%
          "mpGreen-6": "#e1fee4",
          "mpTeal-6": "#e1fffc",
          "mpLBlue-6": "#e2f8ff",
          "mpBlue-6": "#e2f1ff",
          "mpDBlue-6": "#deefff",
          "mpPurple-6": "#f5f1fe",
          "mpLGrey-6": "#e1e2e4",
          "mpDGrey-6": "#c7dff0",
          // 96%
          "mpLRed-7": "#fff3f3",
          "mpDRed-7": "#fff0f0",
          "mpOrange-7": "#fff2e8", // 92%
          "mpSand-7": "#fefefd",
          "mpLYellow-7": "#fffefb",
          "mpYellow-7": "#fffae5", // 90%
          "mpEGreen-7": "#fafcf7",
          "mpGreen-7": "#f0fef1",
          "mpTeal-7": "#f0fefd",
          "mpLBlue-7": "#f0fbff",
          "mpBlue-7": "#f0f8ff",
          "mpDBlue-7": "#eef7ff",
          "mpPurple-7": "#faf8fe",
          "mpLGrey-7": "#f7f7f8",
          "mpDGrey-7": "#c7dff0",
      },
      extend: {},
  },
  plugins: [],
}
