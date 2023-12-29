<script lang="ts">
</script>

<header class=" w-full z-10 fixed sm:static pb-6">
    <nav class="bg-ritual-primary">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div
                class="relative flex h-16 items-center justify-between hidden sm:block"
            >
                <div class="absolute flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                </div>
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch"
                >
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 justify-center">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a
                                href="/"
                                class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium text-xl"
                                >Home</a
                            >
                            <a
                                href="/about"
                                class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium text-xl"
                                >About</a
                            >
                            <a
                                href="/portfolio"
                                class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium text-xl"
                                >Portfolio</a
                            >
                            <a
                                href="/sky-pillar"
                                class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium text-xl"
                                >Sky Pillar</a
                            >
                            <a
                                href="/commissions"
                                class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium text-xl"
                                >Commissions</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input class="side-menu hidden" type="checkbox" id="side-menu" />

        <label
            for="side-menu"
            class=" sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-ritual-accent hover:text-white group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
        >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
                class="block h-8 w-8 stroke-ritual-accent group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </label>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                    href="/"
                    class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                    >Home</a
                >
                <a
                    href="/about"
                    class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                    >About</a
                >
                <a
                    href="/portfolio"
                    class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                    >Portfolio</a
                >
                <a
                    href="/sky-pillar"
                    class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                    >Sky Pillar</a
                >
                <a
                    href="/commissions"
                    class="hover:bg-ritual-accent hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                    >Commissions</a
                >
            </div>
        </div>
    </nav>

    <!-- <nav>
        <ul class="flex-row align-center justify-around">
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="/about/"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >about</span
                    >
                </a>
            </li>
            <li class="">
                <a
                    href="/portfolio/"
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >portfolio</span
                    >
                </a>
            </li>
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="/"
                    ><span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >home</span
                    >
                </a>
            </li>
            <li>
                <a
                    href="/commissions/"
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >commissions</span
                    >
                </a>
            </li>
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="/sky-pillar/"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >sky pillar</span
                    >
                </a>
            </li>
        </ul>
    </nav> -->
</header>
<div class="pb-28 sm:pb-0"></div>

<style>
    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
    li {
        margin: 0 1rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>
