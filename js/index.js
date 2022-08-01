document.getElementById("first-button").addEventListener("click", function () {
  document.getElementById("second-button").classList.remove("minus-img");
  document.getElementById("third-button").classList.remove("minus-img");
  document.getElementById("fourth-button").classList.remove("minus-img");
  document.getElementById("fifth-button").classList.remove("minus-img");
  document.getElementById("sixth-button").classList.remove("minus-img");
  document.getElementById("second-question").classList.remove("show-answer");
  document.getElementById("third-question").classList.remove("show-answer");
  document.getElementById("fourth-question").classList.remove("show-answer");
  document.getElementById("fifth-question").classList.remove("show-answer");
  document.getElementById("sixth-question").classList.remove("show-answer");
  document.getElementById("first-button").classList.toggle("minus-img");
  document.getElementById("first-question").classList.toggle("show-answer");
});
document.getElementById("second-button").addEventListener("click", function () {
  document.getElementById("first-button").classList.remove("minus-img");
  document.getElementById("third-button").classList.remove("minus-img");
  document.getElementById("fourth-button").classList.remove("minus-img");
  document.getElementById("fifth-button").classList.remove("minus-img");
  document.getElementById("sixth-button").classList.remove("minus-img");
  document.getElementById("first-question").classList.remove("show-answer");
  document.getElementById("third-question").classList.remove("show-answer");
  document.getElementById("fourth-question").classList.remove("show-answer");
  document.getElementById("fifth-question").classList.remove("show-answer");
  document.getElementById("sixth-question").classList.remove("show-answer");
  document.getElementById("second-button").classList.toggle("minus-img");
  document.getElementById("second-question").classList.toggle("show-answer");
});
document.getElementById("third-button").addEventListener("click", function () {
  document.getElementById("first-button").classList.remove("minus-img");
  document.getElementById("second-button").classList.remove("minus-img");
  document.getElementById("fourth-button").classList.remove("minus-img");
  document.getElementById("fifth-button").classList.remove("minus-img");
  document.getElementById("sixth-button").classList.remove("minus-img");
  document.getElementById("first-question").classList.remove("show-answer");
  document.getElementById("second-question").classList.remove("show-answer");
  document.getElementById("fourth-question").classList.remove("show-answer");
  document.getElementById("fifth-question").classList.remove("show-answer");
  document.getElementById("sixth-question").classList.remove("show-answer");
  document.getElementById("third-button").classList.toggle("minus-img");
  document.getElementById("third-question").classList.toggle("show-answer");
});
document.getElementById("fourth-button").addEventListener("click", function () {
  document.getElementById("first-button").classList.remove("minus-img");
  document.getElementById("second-button").classList.remove("minus-img");
  document.getElementById("third-button").classList.remove("minus-img");
  document.getElementById("fifth-button").classList.remove("minus-img");
  document.getElementById("sixth-button").classList.remove("minus-img");
  document.getElementById("first-question").classList.remove("show-answer");
  document.getElementById("second-question").classList.remove("show-answer");
  document.getElementById("third-question").classList.remove("show-answer");
  document.getElementById("fifth-question").classList.remove("show-answer");
  document.getElementById("sixth-question").classList.remove("show-answer");
  document.getElementById("fourth-button").classList.toggle("minus-img");
  document.getElementById("fourth-question").classList.toggle("show-answer");
});
document.getElementById("fifth-button").addEventListener("click", function () {
  document.getElementById("first-button").classList.remove("minus-img");
  document.getElementById("second-button").classList.remove("minus-img");
  document.getElementById("third-button").classList.remove("minus-img");
  document.getElementById("fourth-button").classList.remove("minus-img");
  document.getElementById("sixth-button").classList.remove("minus-img");
  document.getElementById("first-question").classList.remove("show-answer");
  document.getElementById("second-question").classList.remove("show-answer");
  document.getElementById("third-question").classList.remove("show-answer");
  document.getElementById("fourth-question").classList.remove("show-answer");
  document.getElementById("sixth-question").classList.remove("show-answer");
  document.getElementById("fifth-button").classList.toggle("minus-img");
  document.getElementById("fifth-question").classList.toggle("show-answer");
});
document.getElementById("sixth-button").addEventListener("click", function () {
  document.getElementById("first-button").classList.remove("minus-img");
  document.getElementById("second-button").classList.remove("minus-img");
  document.getElementById("third-button").classList.remove("minus-img");
  document.getElementById("fourth-button").classList.remove("minus-img");
  document.getElementById("fifth-button").classList.remove("minus-img");
  document.getElementById("first-question").classList.remove("show-answer");
  document.getElementById("second-question").classList.remove("show-answer");
  document.getElementById("third-question").classList.remove("show-answer");
  document.getElementById("fourth-question").classList.remove("show-answer");
  document.getElementById("fifth-question").classList.remove("show-answer");
  document.getElementById("sixth-button").classList.toggle("minus-img");
  document.getElementById("sixth-question").classList.toggle("show-answer");
});
document.getElementById("booking-card").addEventListener("click", function () {
  document.getElementById("eco-main").classList.add("hide-content");
  document.getElementById("eco-booking").classList.add("show-content");
  document.getElementById("eco-go").classList.remove("show-content");
  document.getElementById("eco-relax").classList.remove("show-content");
  document.getElementById("eco-feeds").classList.remove("show-content");
  document.getElementById("eco-beautiful").classList.remove("show-content");
  document.getElementById("eco-pay").classList.remove("show-content");

  document.getElementById("booking-card").classList.add("active-card");
  document.getElementById("booking-card").classList.remove("inactive-card");
  document.getElementById("booking-img").classList.add("active-img");

  document.getElementById("go-card").classList.add("inactive-card");
  document.getElementById("go-card").classList.remove("active-card");
  document.getElementById("go-img").classList.remove("active-img");

  document.getElementById("relax-card").classList.add("inactive-card");
  document.getElementById("relax-card").classList.remove("active-card");
  document.getElementById("relax-img").classList.remove("active-img");

  document.getElementById("feeds-card").classList.add("inactive-card");
  document.getElementById("feeds-card").classList.remove("active-card");
  document.getElementById("feeds-img").classList.remove("active-img");

  document.getElementById("beautiful-card").classList.add("inactive-card");
  document.getElementById("beautiful-card").classList.remove("active-card");
  document.getElementById("beautiful-img").classList.remove("active-img");

  document.getElementById("pay-card").classList.add("inactive-card");
  document.getElementById("pay-card").classList.remove("active-card");
  document.getElementById("pay-img").classList.remove("active-img");

  if (
    !document
      .getElementById("eco-booking")
      .classList.contains("e-booking-image")
  ) {
    gsap.from("#booking-action", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 9,
    });
  }
});
document.getElementById("go-card").addEventListener("click", function () {
  document.getElementById("eco-main").classList.add("hide-content");
  document.getElementById("eco-go").classList.add("show-content");
  document.getElementById("eco-booking").classList.remove("show-content");
  document.getElementById("eco-relax").classList.remove("show-content");
  document.getElementById("eco-feeds").classList.remove("show-content");
  document.getElementById("eco-beautiful").classList.remove("show-content");
  document.getElementById("eco-pay").classList.remove("show-content");

  document.getElementById("booking-card").classList.remove("active-card");
  document.getElementById("booking-card").classList.add("inactive-card");
  document.getElementById("booking-img").classList.remove("active-img");

  document.getElementById("go-card").classList.remove("inactive-card");
  document.getElementById("go-card").classList.add("active-card");
  document.getElementById("go-img").classList.add("active-img");

  document.getElementById("relax-card").classList.add("inactive-card");
  document.getElementById("relax-card").classList.remove("active-card");
  document.getElementById("relax-img").classList.remove("active-img");

  document.getElementById("feeds-card").classList.add("inactive-card");
  document.getElementById("feeds-card").classList.remove("active-card");
  document.getElementById("feeds-img").classList.remove("active-img");

  document.getElementById("beautiful-card").classList.add("inactive-card");
  document.getElementById("beautiful-card").classList.remove("active-card");
  document.getElementById("beautiful-img").classList.remove("active-img");

  document.getElementById("pay-card").classList.add("inactive-card");
  document.getElementById("pay-card").classList.remove("active-card");
  document.getElementById("pay-img").classList.remove("active-img");

  if (!document.getElementById("eco-go").classList.contains("e-go-image")) {
    gsap.from("#go-action", { duration: 1, opacity: 0, scale: 0.1, delay: 9 });
  }
});
document.getElementById("relax-card").addEventListener("click", function () {
  document.getElementById("eco-main").classList.add("hide-content");
  document.getElementById("eco-relax").classList.add("show-content");
  document.getElementById("eco-booking").classList.remove("show-content");
  document.getElementById("eco-go").classList.remove("show-content");
  document.getElementById("eco-feeds").classList.remove("show-content");
  document.getElementById("eco-beautiful").classList.remove("show-content");
  document.getElementById("eco-pay").classList.remove("show-content");

  document.getElementById("booking-card").classList.remove("active-card");
  document.getElementById("booking-card").classList.add("inactive-card");
  document.getElementById("booking-img").classList.remove("active-img");

  document.getElementById("go-card").classList.add("inactive-card");
  document.getElementById("go-card").classList.remove("active-card");
  document.getElementById("go-img").classList.remove("active-img");

  document.getElementById("relax-card").classList.remove("inactive-card");
  document.getElementById("relax-card").classList.add("active-card");
  document.getElementById("relax-img").classList.add("active-img");

  document.getElementById("feeds-card").classList.add("inactive-card");
  document.getElementById("feeds-card").classList.remove("active-card");
  document.getElementById("feeds-img").classList.remove("active-img");

  document.getElementById("beautiful-card").classList.add("inactive-card");
  document.getElementById("beautiful-card").classList.remove("active-card");
  document.getElementById("beautiful-img").classList.remove("active-img");

  document.getElementById("pay-card").classList.add("inactive-card");
  document.getElementById("pay-card").classList.remove("active-card");
  document.getElementById("pay-img").classList.remove("active-img");

  if (
    !document.getElementById("eco-relax").classList.contains("e-relax-image")
  ) {
    gsap.from("#relax-action", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 9,
    });
  }
});
document.getElementById("feeds-card").addEventListener("click", function () {
  document.getElementById("eco-main").classList.add("hide-content");
  document.getElementById("eco-feeds").classList.add("show-content");
  document.getElementById("eco-booking").classList.remove("show-content");
  document.getElementById("eco-go").classList.remove("show-content");
  document.getElementById("eco-relax").classList.remove("show-content");
  document.getElementById("eco-beautiful").classList.remove("show-content");
  document.getElementById("eco-pay").classList.remove("show-content");

  document.getElementById("booking-card").classList.remove("active-card");
  document.getElementById("booking-card").classList.add("inactive-card");
  document.getElementById("booking-img").classList.remove("active-img");

  document.getElementById("go-card").classList.add("inactive-card");
  document.getElementById("go-card").classList.remove("active-card");
  document.getElementById("go-img").classList.remove("active-img");

  document.getElementById("relax-card").classList.add("inactive-card");
  document.getElementById("relax-card").classList.remove("active-card");
  document.getElementById("relax-img").classList.remove("active-img");

  document.getElementById("feeds-card").classList.remove("inactive-card");
  document.getElementById("feeds-card").classList.add("active-card");
  document.getElementById("feeds-img").classList.add("active-img");

  document.getElementById("beautiful-card").classList.add("inactive-card");
  document.getElementById("beautiful-card").classList.remove("active-card");
  document.getElementById("beautiful-img").classList.remove("active-img");

  document.getElementById("pay-card").classList.add("inactive-card");
  document.getElementById("pay-card").classList.remove("active-card");
  document.getElementById("pay-img").classList.remove("active-img");

  if (
    !document.getElementById("eco-feeds").classList.contains("e-feeds-image")
  ) {
    gsap.from("#feeds-action", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 9,
    });
  }
});
document
  .getElementById("beautiful-card")
  .addEventListener("click", function () {
    document.getElementById("eco-main").classList.add("hide-content");
    document.getElementById("eco-beautiful").classList.add("show-content");
    document.getElementById("eco-booking").classList.remove("show-content");
    document.getElementById("eco-go").classList.remove("show-content");
    document.getElementById("eco-relax").classList.remove("show-content");
    document.getElementById("eco-feeds").classList.remove("show-content");
    document.getElementById("eco-pay").classList.remove("show-content");

    document.getElementById("booking-card").classList.remove("active-card");
    document.getElementById("booking-card").classList.add("inactive-card");
    document.getElementById("booking-img").classList.remove("active-img");

    document.getElementById("go-card").classList.add("inactive-card");
    document.getElementById("go-card").classList.remove("active-card");
    document.getElementById("go-img").classList.remove("active-img");

    document.getElementById("relax-card").classList.add("inactive-card");
    document.getElementById("relax-card").classList.remove("active-card");
    document.getElementById("relax-img").classList.remove("active-img");

    document.getElementById("feeds-card").classList.add("inactive-card");
    document.getElementById("feeds-card").classList.remove("active-card");
    document.getElementById("feeds-img").classList.remove("active-img");

    document.getElementById("beautiful-card").classList.remove("inactive-card");
    document.getElementById("beautiful-card").classList.add("active-card");
    document.getElementById("beautiful-img").classList.add("active-img");

    document.getElementById("pay-card").classList.add("inactive-card");
    document.getElementById("pay-card").classList.remove("active-card");
    document.getElementById("pay-img").classList.remove("active-img");

    if (
      !document
        .getElementById("eco-beautiful")
        .classList.contains("e-beautiful-image")
    ) {
      gsap.from("#beautiful-action", {
        duration: 1,
        opacity: 0,
        scale: 0.1,
        delay: 9,
      });
    }
  });
document.getElementById("pay-card").addEventListener("click", function () {
  document.getElementById("eco-main").classList.add("hide-content");
  document.getElementById("eco-pay").classList.add("show-content");
  document.getElementById("eco-booking").classList.remove("show-content");
  document.getElementById("eco-go").classList.remove("show-content");
  document.getElementById("eco-relax").classList.remove("show-content");
  document.getElementById("eco-feeds").classList.remove("show-content");
  document.getElementById("eco-beautiful").classList.remove("show-content");

  document.getElementById("booking-card").classList.remove("active-card");
  document.getElementById("booking-card").classList.add("inactive-card");
  document.getElementById("booking-img").classList.remove("active-img");

  document.getElementById("go-card").classList.add("inactive-card");
  document.getElementById("go-card").classList.remove("active-card");
  document.getElementById("go-img").classList.remove("active-img");

  document.getElementById("relax-card").classList.add("inactive-card");
  document.getElementById("relax-card").classList.remove("active-card");
  document.getElementById("relax-img").classList.remove("active-img");

  document.getElementById("feeds-card").classList.add("inactive-card");
  document.getElementById("feeds-card").classList.remove("active-card");
  document.getElementById("feeds-img").classList.remove("active-img");

  document.getElementById("beautiful-card").classList.add("inactive-card");
  document.getElementById("beautiful-card").classList.remove("active-card");
  document.getElementById("beautiful-img").classList.remove("active-img");

  document.getElementById("pay-card").classList.remove("inactive-card");
  document.getElementById("pay-card").classList.add("active-card");
  document.getElementById("pay-img").classList.add("active-img");

  if (!document.getElementById("eco-pay").classList.contains("e-pay-image")) {
    gsap.from("#pay-action", { duration: 1, opacity: 0, scale: 0.1, delay: 9 });
  }
});
document.getElementById("i-booking").addEventListener("mouseover", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-booking").classList.add("show");
    document.getElementById("l-booking").classList.add("show");
  }
});
document
  .getElementById("i-booking")
  .addEventListener("mouseleave", function () {
    if (window.screen.width >= 1200) {
      document.getElementById("in-booking").classList.remove("show");
      document.getElementById("l-booking").classList.remove("show");
    }
  });
document.getElementById("i-go").addEventListener("mouseover", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-go").classList.add("show");
    document.getElementById("l-go").classList.add("show");
  }
});
document.getElementById("i-go").addEventListener("mouseleave", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-go").classList.remove("show");
    document.getElementById("l-go").classList.remove("show");
  }
});
document.getElementById("i-relax").addEventListener("mouseover", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-relax").classList.add("show");
    document.getElementById("l-relax").classList.add("show");
  }
});
document.getElementById("i-relax").addEventListener("mouseleave", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-relax").classList.remove("show");
    document.getElementById("l-relax").classList.remove("show");
  }
});
document.getElementById("i-feeds").addEventListener("mouseover", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-feeds").classList.add("show");
    document.getElementById("l-feeds").classList.add("show");
  }
});
document.getElementById("i-feeds").addEventListener("mouseleave", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-feeds").classList.remove("show");
    document.getElementById("l-feeds").classList.remove("show");
  }
});
document
  .getElementById("i-beautiful")
  .addEventListener("mouseover", function () {
    if (window.screen.width >= 1200) {
      document.getElementById("in-beautiful").classList.add("show");
      document.getElementById("l-beautiful").classList.add("show");
    }
  });
document
  .getElementById("i-beautiful")
  .addEventListener("mouseleave", function () {
    if (window.screen.width >= 1200) {
      document.getElementById("in-beautiful").classList.remove("show");
      document.getElementById("l-beautiful").classList.remove("show");
    }
  });
document.getElementById("i-pay").addEventListener("mouseover", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-pay").classList.add("show");
    document.getElementById("l-pay").classList.add("show");
  }
});
document.getElementById("i-pay").addEventListener("mouseleave", function () {
  if (window.screen.width >= 1200) {
    document.getElementById("in-pay").classList.remove("show");
    document.getElementById("l-pay").classList.remove("show");
  }
});
document.getElementById("icon-main").addEventListener("mouseover", function () {
  loop = false;
  noLoopMore();
});
document
  .getElementById("icon-main")
  .addEventListener("mouseleave", function () {
    loop = true;
    // reColorPay()
  });

document.getElementById("i-booking").addEventListener("click", function () {
  document.getElementById("booking-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
document.getElementById("i-go").addEventListener("click", function () {
  document.getElementById("go-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
document.getElementById("i-relax").addEventListener("click", function () {
  document.getElementById("relax-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
document.getElementById("i-feeds").addEventListener("click", function () {
  document.getElementById("feeds-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
document.getElementById("i-beautiful").addEventListener("click", function () {
  document.getElementById("beautiful-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
document.getElementById("i-pay").addEventListener("click", function () {
  document.getElementById("pay-card").click();
  document
    .getElementById("ecosystem")
    .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});
var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie"),
  path: "../animation/code/file/jsonfullnobackground/data.json",
  renderer: "svg",
  loop: false,
  autoplay: false,
});

var loopAnimation = bodymovin.loadAnimation({
  container: document.getElementById("looplottie"),
  path: "../animation/code/file/jsonloopnobackground/data.json",
  renderer: "svg",
  loop: true,
  autoplay: false,
});

var loop = true;

function noLoopMore() {
  document.getElementById("i-booking").classList.remove("booking-animation");
  document.getElementById("i-go").classList.remove("go-animation");
  document.getElementById("i-relax").classList.remove("relax-animation");
  document.getElementById("i-feeds").classList.remove("feeds-animation");
  document
    .getElementById("i-beautiful")
    .classList.remove("beautiful-animation");
  document.getElementById("i-pay").classList.remove("pay-animation");
  document.getElementById("logo-ico").classList.remove("display-none");
  document.getElementById("maybay").classList.add("display-none");
}

function reColorBooking() {
  document.getElementById("i-booking").classList.remove("booking-animation");
  setTimeout(function () {
    document.getElementById("in-booking").style.display = "none";
    document.getElementById("l-booking").style.display = "none";
  }, 1000);
}

function reColorGo() {
  document.getElementById("i-go").classList.remove("go-animation");
  setTimeout(function () {
    document.getElementById("in-go").style.display = "none";
    document.getElementById("l-go").style.display = "none";
  }, 1000);
}

function reColorRelax() {
  document.getElementById("i-relax").classList.remove("relax-animation");
  setTimeout(function () {
    document.getElementById("in-relax").style.display = "none";
    document.getElementById("l-relax").style.display = "none";
  }, 1000);
}

function reColorFeeds() {
  document.getElementById("i-feeds").classList.remove("feeds-animation");
  setTimeout(function () {
    document.getElementById("in-feeds").style.display = "none";
    document.getElementById("l-feeds").style.display = "none";
  }, 1000);
}

function reColorBeautiful() {
  document
    .getElementById("i-beautiful")
    .classList.remove("beautiful-animation");
  setTimeout(function () {
    document.getElementById("in-beautiful").style.display = "none";
    document.getElementById("l-beautiful").style.display = "none";
  }, 1000);
}

function reColorPay() {
  document.getElementById("i-pay").classList.remove("pay-animation");
  setTimeout(function () {
    document.getElementById("in-pay").style.display = "none";
    document.getElementById("l-pay").style.display = "none";
  }, 1000);
  if (loop) {
    document.getElementById("logo-ico").classList.add("display-none");
    document.getElementById("maybay").classList.remove("display-none");
    document.getElementById("i-booking").classList.add("booking-animation");
    setTimeout(function () {
      document
        .getElementById("i-booking")
        .classList.remove("booking-animation");
      if (loop) {
        document.getElementById("i-go").classList.add("go-animation");
      }
    }, 1000);
    setTimeout(function () {
      document.getElementById("i-go").classList.remove("go-animation");
      if (loop) {
        document.getElementById("i-relax").classList.add("relax-animation");
      }
    }, 2000);
    setTimeout(function () {
      document.getElementById("i-relax").classList.remove("relax-animation");
      if (loop) {
        document.getElementById("i-feeds").classList.add("feeds-animation");
      }
    }, 3000);
    setTimeout(function () {
      document.getElementById("i-feeds").classList.remove("feeds-animation");
      if (loop) {
        document
          .getElementById("i-beautiful")
          .classList.add("beautiful-animation");
      }
    }, 4000);
    setTimeout(function () {
      document
        .getElementById("i-beautiful")
        .classList.remove("beautiful-animation");
      if (loop) {
        document.getElementById("i-pay").classList.add("pay-animation");
      }
    }, 5000);
    setTimeout(function () {
      document.getElementById("i-pay").classList.remove("pay-animation");
      reColorPay();
    }, 6000);
  } else {
    setTimeout(function () {
      reColorPay();
    }, 1000);
  }
}

function gsapAnimation() {
  document.getElementById("i-booking").classList.add("booking-animation");
  document.getElementById("i-go").classList.add("go-animation");
  document.getElementById("i-relax").classList.add("relax-animation");
  document.getElementById("i-feeds").classList.add("feeds-animation");
  document.getElementById("i-beautiful").classList.add("beautiful-animation");
  document.getElementById("i-pay").classList.add("pay-animation");
  if (window.screen.width >= 1200) {
    document.getElementById("in-booking").style.display = "block";
    document.getElementById("l-booking").style.display = "block";
    document.getElementById("in-go").style.display = "block";
    document.getElementById("l-go").style.display = "block";
    document.getElementById("in-relax").style.display = "block";
    document.getElementById("l-relax").style.display = "block";
    document.getElementById("in-feeds").style.display = "block";
    document.getElementById("l-feeds").style.display = "block";
    document.getElementById("in-beautiful").style.display = "block";
    document.getElementById("l-beautiful").style.display = "block";
    document.getElementById("in-pay").style.display = "block";
    document.getElementById("l-pay").style.display = "block";
    gsap.from("#l-booking", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 7.2,
    });
    gsap.from("#in-booking", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 7.2,
    });
    gsap.from("#l-go", { duration: 1, opacity: 0, scale: 0.1, delay: 8.2 });
    gsap.from("#in-go", { duration: 1, opacity: 0, scale: 0.1, delay: 8.2 });
    gsap.from("#l-relax", { duration: 1, opacity: 0, scale: 0.1, delay: 9.2 });
    gsap.from("#in-relax", { duration: 1, opacity: 0, scale: 0.1, delay: 9.2 });
    gsap.from("#l-feeds", { duration: 1, opacity: 0, scale: 0.1, delay: 10.2 });
    gsap.from("#in-feeds", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 10.2,
    });
    gsap.from("#l-beautiful", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 11.2,
    });
    gsap.from("#in-beautiful", {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      delay: 11.2,
    });
    gsap.from("#l-pay", { duration: 1, opacity: 0, scale: 0.1, delay: 12.2 });
    gsap.from("#in-pay", { duration: 1, opacity: 0, scale: 0.1, delay: 12.2 });
    gsap.fromTo(
      "#logo-ico",
      { opacity: 0, scale: 0.1 },
      { duration: 0.5, opacity: 1, scale: 1.2, delay: 6 }
    );
    gsap.fromTo(
      "#logo-ico",
      { scale: 1.2 },
      { duration: 0.5, scale: 1, delay: 6.5 }
    );
  } else {
    gsap.fromTo(
      "#logo-ico",
      { opacity: 0, scale: 0.1 },
      { duration: 0.5, opacity: 1, scale: 1.1, delay: 6 }
    );
    gsap.fromTo(
      "#logo-ico",
      { scale: 1.1 },
      { duration: 0.5, scale: 1, delay: 6.5 }
    );
  }
  gsap.from(".what-is-bestay", { duration: 1, opacity: 0, scale: 0.5 });
  gsap.fromTo(
    ".nen",
    { webkitFilter: "brightness(1)", filter: "brightness(1)" },
    {
      duration: 2,
      webkitFilter: "brightness(2.5)",
      filter: "brightness(2.5)",
      yoyo: true,
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
    }
  );
  gsap.from(".earth", { duration: 1, opacity: 0, scale: 0.1, delay: 1 });
  gsap.fromTo(
    ".earth",
    { webkitFilter: "brightness(1)", filter: "brightness(1)" },
    {
      duration: 2,
      webkitFilter: "brightness(2.5)",
      filter: "brightness(2.5)",
      yoyo: true,
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
      delay: 4,
    }
  );
  gsap.from(".logo", { duration: 0.5, opacity: 0, scale: 0.1, delay: 5 });
  gsap.from(".circle-line", {
    duration: 0.5,
    opacity: 0,
    scale: 0.1,
    delay: 5.5,
  });
  gsap.from(".circle-black", {
    duration: 0.5,
    opacity: 0,
    scale: 0.1,
    delay: 5.5,
  });
  // gsap.fromTo(".earth-no-background", { backgroundPosition: '0 0' }, {duration: 3.5, backgroundPosition: '450px 450px', repeat: -1, repeatDelay: 0, ease: "none"})
  gsap.fromTo(
    "#i-booking",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 7,
      onComplete: reColorBooking,
    }
  );
  gsap.fromTo(
    "#i-go",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 8,
      onComplete: reColorGo,
    }
  );
  gsap.fromTo(
    "#i-relax",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 9,
      onComplete: reColorRelax,
    }
  );
  gsap.fromTo(
    "#i-feeds",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 10,
      onComplete: reColorFeeds,
    }
  );
  gsap.fromTo(
    "#i-beautiful",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 11,
      onComplete: reColorBeautiful,
    }
  );
  gsap.fromTo(
    "#i-pay",
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: 12,
      onComplete: reColorPay,
    }
  );
}

var runAnimation = false;

function animationOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    console.log(entries);
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        if (!runAnimation) {
          runAnimation = true;
          animation.play();
          setTimeout(function () {
            loopAnimation.play();
            document.getElementById("looplottie").style.visibility = "visible";
            document.getElementById("lottie").style.visibility = "hidden";
          }, 8600);
        }
      }
    });
  });

  observer.observe(document.querySelector("#lottie"));
}

function onLoad() {
  console.log("Co vao day");
  // animation.playSegments([[0,600],[300,847]], true);
  document.getElementById("looplottie").style.visibility = "hidden";
  gsapAnimation();
  var earthRotate = document.getElementById("earth-rotate");
  var earthNoRotate = document.getElementById("earth-no-rotate");
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
      earthNoRotate.classList.add("display-none");
    } else {
      earthRotate.classList.add("display-none");
    }
  } else {
    earthNoRotate.classList.add("display-none");
  }
  animationOnScroll();
}
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("mobile-eco").classList.remove("open-childs");
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

function openMenu() {
  document.getElementById("mobile-eco").classList.toggle("open-childs");
}
