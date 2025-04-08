const getPreviousTime = (minute) => {
      const now = new Date();
      now.setMinutes(now.getMinutes() - minute);
      return now;
}
const SavedRecipesData = [
      {
            imgRecipes: "../src/FEData/image 120.png",
            nameRecipes: "Italian-style tomato salad",
            time: getPreviousTime(14)
      },
      {
            imgRecipes: "../src/FEData/image 121.png",
            nameRecipes: "Vegetable and shrimp spaghetti",
            time: getPreviousTime(15)
      },
      {
            imgRecipes: "../src/FEData/image 122.png",
            nameRecipes: "Lotus delight salad ",
            time: getPreviousTime(20)
      },
      {
            imgRecipes: "../src/FEData/image 123.png",
            nameRecipes: "Snack cakes",
            time: getPreviousTime(21)
      },
      {
            imgRecipes: "../src/FEData/image 124.png",
            nameRecipes: "Salad with cabbage and shrimp",
            time: getPreviousTime(32)
      },
      {
            imgRecipes: "../src/FEData/image 125.png",
            nameRecipes: "Bean, shrimp, and potato salad ",
            time: getPreviousTime(72)
      },
      {
            imgRecipes: "../src/FEData/image 126.png",
            nameRecipes: "Sunny-side up fried eggs ",
            time: getPreviousTime(100)
      },
      {
            imgRecipes: "../src/FEData/image 127.png",
            nameRecipes: "Lotus delight salad ",
            time: getPreviousTime(2000)
      },
      // Add more data
      {
            imgRecipes: "../src/FEData/image 120.png",
            nameRecipes: "Italian-style tomato salad 1",
            time: getPreviousTime(14)
      },
      {
            imgRecipes: "../src/FEData/image 121.png",
            nameRecipes: "Vegetable and shrimp spaghetti 1",
            time: getPreviousTime(15)
      },
      {
            imgRecipes: "../src/FEData/image 122.png",
            nameRecipes: "Lotus delight salad 1",
            time: getPreviousTime(20)
      },
      {
            imgRecipes: "../src/FEData/image 123.png",
            nameRecipes: "Snack cakes1",
            time: getPreviousTime(21)
      },
      {
            imgRecipes: "../src/FEData/image 124.png",
            nameRecipes: "Salad with cabbage and shrimp1",
            time: getPreviousTime(32)
      },
      {
            imgRecipes: "../src/FEData/image 125.png",
            nameRecipes: "Bean, shrimp, and potato salad 1",
            time: getPreviousTime(72)
      },
      {
            imgRecipes: "../src/FEData/image 126.png",
            nameRecipes: "Sunny-side up fried eggs1 ",
            time: getPreviousTime(100)
      },
      {
            imgRecipes: "../src/FEData/image 127.png",
            nameRecipes: "Lotus delight salad 1",
            time: getPreviousTime(2000)
      },
      // Add more data
      {
            imgRecipes: "../src/FEData/image 120.png",
            nameRecipes: "Italian-style tomato salad 12",
            time: getPreviousTime(14)
      },
      {
            imgRecipes: "../src/FEData/image 121.png",
            nameRecipes: "Vegetable and shrimp spaghetti 12",
            time: getPreviousTime(15)
      },
      {
            imgRecipes: "../src/FEData/image 122.png",
            nameRecipes: "Lotus delight salad 12",
            time: getPreviousTime(20)
      },
      {
            imgRecipes: "../src/FEData/image 123.png",
            nameRecipes: "Snack cakes12",
            time: getPreviousTime(21)
      },
]

const getFormatTime = (time) => {
      const now = new Date();
      const past = new Date(time);
      const diffInSeconds = Math.floor((now - past) / 1000); // Độ chênh lệch theo giây

      const minutes = Math.floor(diffInSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

      if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
      if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
      return `${years} year${years > 1 ? "s" : ""} ago`;
};
export { SavedRecipesData, getFormatTime } 