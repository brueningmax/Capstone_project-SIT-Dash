module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "500px",
      md: [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { min: "668px", max: "767px" },
        { min: "868px" },
      ],
      lg: "1100px",
      xl: "1400px",
    },
    extend: {
      height: {
        cardsHeight: "90%",
        cardsHeight2: "26%",
        cardsHeight3: "28%",
        cardsHeight4: "80%",
        cardsHeight5: "85%",
        tenP: "10%",
        fiveP: "5%",
        fortyP: "45%",
        sixteyP: "55%",
      },
      width: {
        cardsContainer: "46%",
        cardsWidth: "48%",
        cardsWidth2: "94%",
        cardsWidth3: "92%",
        togW: "13%",
        cardWidth4: "28%",
        cardWidth5: "30%",
        cardWidth6: "10%",
      },
      colors: {
        serious: "#AFDAA3",
        notSerious: "#D68D96",
        toReview: "#FDDB93",
        enrolled: "#819FB3",
        droppedOut: "#996D99",
        accepted: "#7AB495",
        total: "#000000",
        toggelBackgroud: "#DA925E",
        toggelButton: "#698C9E",
        background: "#f1f0fa",
        partTime: "#F3A5BC",
        shortC: "#78C1C2",
        immersiveB: "#4D94D0",
        totalB: "#F5CF89",
      },
    },
  },
  plugins: [],
};
