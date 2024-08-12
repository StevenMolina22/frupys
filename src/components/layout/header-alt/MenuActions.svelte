<script>
  import DarkMode from "./icons/DarkMode.svelte";
  import LightMode from "./icons/LightMode.svelte";
  import Profile from "./icons/Profile.svelte";
  import Tag from "./icons/Tag.svelte";
  import MobileNav from "./atoms/MobileNav.svelte";
  import MobileSearch from "./atoms/MobileSearch.svelte";
  import PrimaryNav from "./atoms/PrimaryNav.svelte";
  import ProfileDropdown from "./atoms/ProfileDropdown.svelte";
  import SocialIcons from "./icons/SocialIcons.svelte";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div
  class="t-0 fixed left-0 z-20 flex w-full items-center justify-between p-6 lg:hidden"
  id="mobileMenuBar"
>
  <!-- Mobile Logo -->
  <a href="index.html" class="shrink-0">
    <img
      src="img/logo.png"
      class="max-h-7 dark:hidden"
      alt="Xhibiter | NFT Marketplace"
    />
    <img
      src="img/logo_white.png"
      class="hidden max-h-7 dark:block"
      alt="Xhibiter | NFT Marketplace"
    />
  </a>
  <!-- Mobile Menu Toggle -->
  <button
    id="mobileMenuToggle"
    class="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
    aria-label="toggle mobile menu"
    on:click={toggleMenu}
  >
    {#if isMenuOpen}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        ></path>
      </svg>
    {/if}
  </button>
</div>

<div
  class={`ml-auto items-center z-10 lg:relative lg:flex fixed inset-x-0 top-0 h-screen lg:h-auto bg-red-500 lg:bg-transparent dark:bg-red-500 dark:lg:bg-transparent lg:opacity-100 bg-jacarta-800 ${!isMenuOpen ? "invisible" : ""} lg:visible px-4`}
  id="navbar"
>
  <!-- Mobile Logo / Menu Close -->
  <MobileNav />
  <MobileSearch />
  <PrimaryNav />
  <!-- Mobile Connect Wallet / Socials -->
  <div class="mt-10 w-full lg:hidden">
    <a
      href="#"
      class="js-wallet block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
      data-bs-toggle="modal"
      data-bs-target="#walletModal"
    >
      Connect Wallet
    </a>
    <hr class="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />

    <SocialIcons />
  </div>
  <!-- Actions -->
  <div class="ml-8 hidden lg:flex xl:ml-12">
    <!-- Wallet -->
    <a
      href="#"
      class="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
      data-bs-toggle="modal"
      data-bs-target="#walletModal"
      aria-label="wallet"
    >
      <Tag />
    </a>
    <!-- Profile -->
    <div class="js-nav-dropdown group-dropdown relative">
      <button
        class="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
        id="profileDropdown"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="profile"
      >
        <Profile />
      </button>
      <ProfileDropdown />
    </div>
    <!-- Dark Mode -->
    <a
      href="#"
      class="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
    >
      <DarkMode />
      <LightMode />
    </a>
  </div>
</div>
