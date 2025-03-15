<script>
  import PagesDropdown from "./PagesDropdown.svelte";
  import { homeDropdownLinks, exploreLinks, resourcesLinks } from "../../header-alt/links-data";
</script>

<nav class="navbar w-full">
  <ul class="flex flex-col lg:flex-row">
    <li class="group relative">
      <a
        href="#"
        class="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
        id="navDropdown-1"
        aria-expanded="false"
        role="button"
        data-bs-toggle="dropdown"
        >Home
        <i class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            ></path>
          </svg>
        </i>
      </a>
      <ul
        class="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
        aria-labelledby="navDropdown-1"
      >
        {#each homeDropdownLinks as link}
          <li>
            <a
              href={link.href}
              class="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
            >
              <span class="font-display text-sm text-jacarta-700 dark:text-white"
                >{link.label}</span
              >
            </a>
          </li>
        {/each}
      </ul>
    </li>
    
    <li class="js-nav-dropdown nav-item dropdown group relative">
      <a
        href="collections"
        class="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
        id="navDropdown-3"
        aria-expanded="false"
        role="button"
        data-bs-toggle="dropdown"
        >Explore
        <i class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            ></path>
          </svg>
        </i>
      </a>
      <ul
        class="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
        aria-labelledby="navDropdown-1"
      >
        {#each exploreLinks as link}
          <li>
            <a
              href={link.href}
              class="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
            >
              <span class="mr-3 rounded-xl {link.bgColor} p-[0.375rem]">
                <!-- SVGs removed as requested -->
              </span>
              <span class="font-display text-sm text-jacarta-700 dark:text-white"
                >{link.label}</span
              >
            </a>
          </li>
        {/each}
      </ul>
    </li>
    <li class="js-nav-dropdown group relative">
      <a
        href="#"
        class="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
        id="navDropdown-4"
        aria-expanded="false"
        role="button"
        data-bs-toggle="dropdown"
        >Resources
        <i class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            ></path>
          </svg>
        </i>
      </a>
      <ul
        class="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
        aria-labelledby="navDropdown-4"
      >
        {#each resourcesLinks as link}
          <li>
            <a
              href={link.href}
              class="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
            >
              <span class="font-display text-sm text-jacarta-700 dark:text-white"
                >{link.label}</span
              >
            </a>
          </li>
        {/each}
      </ul>
    </li>
    <li class="group">
      <a
        href="create"
        class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
        >Create</a
      >
    </li>
  </ul>
</nav>

<style>
  .carechimba {
    /* background-color: red; */
  }
</style>