import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

export default function Nav({ style, navClass }) {
  useEffect(() => {
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      $("body").toggleClass("scroll", scrolled > 350);
    });

    $(document).ready(function () {
      // Add smooth scrolling to all links
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - 65,
            },
            function () {
              var $target = $(hash);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      });
    });
  }, []);
  return (
    <div className={`nav ${navClass ? navClass : ""}`} style={style}>
      <a href="#header" className="nav__brand">
        <span className="nav__brand--align">
          <img className="nav__img" src="\enjaz-white.svg" alt="" />
          enjaz
        </span>
      </a>
      <div className="nav__cta hide">
        <Link scroll={false} href="/#section1">
          مهمتنا
        </Link>
        <Link scroll={false} href="#section2">
          رسالتنا
        </Link>
        <Link scroll={false} href="#section3">
          اهدافنا
        </Link>
        <Link scroll={false} href="#section4">
          سياستنا
        </Link>
        {/* <button className="products" href="">
          منتجاتنا
        </button> */}
      </div>
      <button className="products" href="">
          منتجاتنا
        </button>
    </div>
  );
}
