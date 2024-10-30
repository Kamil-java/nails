import React from "react";

function Header() {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Gallery
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Price
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            About Me
          </a>
        </li>
      </ul>
      <header className="bg-light-pink text-white text-center p-2">
        <h1>Tytuł</h1>
        <p>Profesjonalne usługi manicure i pedicure. Martyna Birlet</p>
      </header>
    </div>
  );
}

export default Header;
