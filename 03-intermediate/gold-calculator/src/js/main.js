class GoldPrice {
  static calcGoldProductPrice() {
    const goldGram = document.getElementById("goldGram");
    const goldWeight = document.getElementById("goldWeight");

    const goldGramValue = +goldGram.value || 0;
    const goldWeightValue = +goldWeight.value || 0;

    const calculatedPrice = goldGramValue * goldWeightValue;
    return calculatedPrice;
  }

  static calcGoldLaborPrice() {
    const laborPercent = document.getElementById("laborPercent");
    const laborPercentValue = +laborPercent.value || 0;

    const calculatedPrice =
      this.calcGoldProductPrice() * (laborPercentValue / 100);
    return calculatedPrice;
  }

  static calcProfitPercent() {
    const profitPercent = document.getElementById("profitPercent");
    const profitPercentValue = +profitPercent.value || 0;

    const calculatedPrice =
      (this.calcGoldProductPrice() + this.calcGoldLaborPrice()) *
      (profitPercentValue / 100);
    return calculatedPrice;
  }

  static calcTaxPrice() {
    const calculatedPrice =
      (this.calcProfitPercent() + this.calcGoldLaborPrice()) * (9 / 100);
    return calculatedPrice;
  }

  static calcStonePrice() {
    const stonePrice = document.getElementById("stonePrice");
    const stonePriceValue = +stonePrice.value;
    return stonePriceValue;
  }

  static calcOtherCosts() {
    const otherCosts = document.getElementById("otherCosts");
    const otherCostsValue = +otherCosts.value;
    return otherCostsValue;
  }

  static calcTotalPrice() {
    const totalPrice =
      this.calcGoldProductPrice() +
      this.calcGoldLaborPrice() +
      this.calcProfitPercent() +
      this.calcTaxPrice() +
      this.calcStonePrice() +
      this.calcOtherCosts();
    return totalPrice;
  }

  static seperateNumbers(number) {
    return number.toLocaleString("en-us");
  }
}

class Ui {
  // Use a static property to store the chart instance.
  static chartInstance = null;

  static displayGoldProductPrice() {
    let goldGram = document.getElementById("goldGram");
    let goldWeight = document.getElementById("goldWeight");
    let laborPercent = document.getElementById("laborPercent");
    let profitPercent = document.getElementById("profitPercent");
    let stoneAmount = document.getElementById("stonePrice");
    let otherCosts = document.getElementById("otherCosts");

    const goldprice = document.querySelector(".goldprice");
    const laborPrice = document.querySelector(".laborPrice");
    const profitPrice = document.querySelector(".profitPrice");
    const taxPrice = document.querySelector(".taxprice");
    const stonePrice = document.querySelector(".stonePrice");
    const otherPrice = document.querySelector(".otherCosts");
    const totalPrice = document.querySelector(".totalprice");

    // Helper function to update both displays, preventing duplication
    const updateDisplays = () => {
      // Get the RAW numbers first
      const goldProductPrice = GoldPrice.calcGoldProductPrice();
      const goldLaborPrice = GoldPrice.calcGoldLaborPrice();
      const goldProfitPercent = GoldPrice.calcProfitPercent();
      const goldTaxPrice = GoldPrice.calcTaxPrice();
      const goldStonePrice = GoldPrice.calcStonePrice();
      const goldOtherCosts = GoldPrice.calcOtherCosts();
      const goldTotalPrice = GoldPrice.calcTotalPrice();

      // Then, format and display them
      goldprice.textContent =
        GoldPrice.seperateNumbers(goldProductPrice) + " تومان";
      laborPrice.textContent =
        GoldPrice.seperateNumbers(goldLaborPrice) + " تومان";
      profitPrice.textContent =
        GoldPrice.seperateNumbers(goldProfitPercent) + " تومان";
      taxPrice.textContent = GoldPrice.seperateNumbers(goldTaxPrice) + " تومان";
      stonePrice.textContent =
        GoldPrice.seperateNumbers(goldStonePrice) + " تومان";
      otherPrice.textContent =
        GoldPrice.seperateNumbers(goldOtherCosts) + " تومان";
      totalPrice.textContent = GoldPrice.seperateNumbers(goldTotalPrice);
    };

    // Attach one listener that updates both displays for a better user experience
    goldGram.addEventListener("input", updateDisplays);
    goldWeight.addEventListener("input", updateDisplays);
    laborPercent.addEventListener("input", updateDisplays);
    profitPercent.addEventListener("input", updateDisplays);
    stoneAmount.addEventListener("input", updateDisplays);
    otherCosts.addEventListener("input", updateDisplays);
  }

  // New method to update the chart's text colors based on the theme
  static updateChartTextColors() {
    if (!Ui.chartInstance) return;

    const goldcontainer = document.querySelector(".goldcontainer");
    const newTextColor = goldcontainer.classList.contains("dark")
      ? "#ffffff"
      : "#000000";

    Ui.chartInstance.updateOptions({
      legend: {
        labels: {
          colors: newTextColor,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              total: {
                color: newTextColor,
              },
            },
          },
        },
      },
    });
  }

  static displayDarkMode() {
    const goldcontainer = document.querySelector(".goldcontainer");
    const lightmode = document.querySelector(".lightmode");
    const darkmode = document.querySelector(".darkmode");

    darkmode.addEventListener("click", () => {
      if (!goldcontainer.classList.contains("dark")) {
        goldcontainer.classList.add("dark");
        lightmode.classList.remove("bg-yellow-500");
        darkmode.classList.add("bg-sky-500");
        // Call the new method to update chart colors
        Ui.updateChartTextColors();
      }
    });

    lightmode.addEventListener("click", () => {
      if (goldcontainer.classList.contains("dark")) {
        goldcontainer.classList.remove("dark");
        darkmode.classList.remove("bg-sky-500");
        lightmode.classList.add("bg-yellow-500");
        // Call the new method to update chart colors
        Ui.updateChartTextColors();
      }
    });
  }

  static initDisplayChart() {
    // Get all the input elements
    const inputs = document.querySelectorAll(
      "#goldGram, #goldWeight, #laborPercent, #profitPercent, #stonePrice, #otherCosts"
    );

    const goldcontainer = document.querySelector(".goldcontainer");
    const getChartTextColor = () =>
      goldcontainer.classList.contains("dark") ? "#ffffff" : "#000000";

    const todaydate = document.querySelector(".todaydate");
    todaydate.textContent = new Date().toLocaleDateString("fa-ir");

    // ApexCharts configuration object
    const chartOptions = {
      chart: {
        type: "donut",
        fontFamily: "yekanback",
        width: "100%",
        height: "100%",
      },
      labels: [
        "قیمت پایه",
        "اجرت ساخت",
        "سود فروش",
        "مالیات",
        "قیمت سنگ/جواهر",
        "هزینه جانبی",
      ],
      series: [
        GoldPrice.calcGoldProductPrice(),
        GoldPrice.calcGoldLaborPrice(),
        GoldPrice.calcProfitPercent(),
        GoldPrice.calcTaxPrice(),
        GoldPrice.calcStonePrice(),
        GoldPrice.calcOtherCosts(),
      ],
      colors: [
        "#EAB308", // Gold
        "#3b82f6", // Blue
        "#22c55e", // Green
        "#EF4444", // Red
        "#d946ef", // Purple
        "#ea580c", // Orange
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontSize: "14px",
        labels: {
          colors: getChartTextColor(), // Initial color
        },
      },
      tooltip: {
        y: {
          formatter: (val) => `${GoldPrice.seperateNumbers(val)} تومان`,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "جمع کل",
                fontSize: "20px",
                color: getChartTextColor(), // Initial color
                fontWeight: 600,
                formatter: (w) =>
                  GoldPrice.seperateNumbers(
                    w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                  ),
              },
            },
          },
        },
      },
      stroke: {
        width: 0,
        colors: ["#0d1117"],
      },
    };

    // Create and render the chart
    const chart = new ApexCharts(
      document.querySelector("#donutChart"),
      chartOptions
    );
    chart.render();

    // Assign the chart instance to the static property
    Ui.chartInstance = chart;

    // Helper function to update both the UI and the chart
    const updateAll = () => {
      // Get the RAW numbers from GoldPrice class
      const goldProductPrice = GoldPrice.calcGoldProductPrice();
      const goldLaborPrice = GoldPrice.calcGoldLaborPrice();
      const goldProfitPrice = GoldPrice.calcProfitPercent();
      const goldTaxPrice = GoldPrice.calcTaxPrice();
      const goldStonePrice = GoldPrice.calcStonePrice();
      const goldOtherCosts = GoldPrice.calcOtherCosts();
      const goldTotalPrice = GoldPrice.calcTotalPrice();

      // Update the chart series data
      Ui.chartInstance.updateSeries([
        goldProductPrice,
        goldLaborPrice,
        goldProfitPrice,
        goldTaxPrice,
        goldStonePrice,
        goldOtherCosts,
      ]);
    };

    // Add an event listener to each input to trigger a full update
    inputs.forEach((input) => {
      input.addEventListener("input", updateAll);
    });

    // Initial display update on page load
    updateAll();
  }
}

class App {
  static init() {
    Ui.displayGoldProductPrice();
    Ui.initDisplayChart();
    Ui.displayDarkMode();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
