<template>
  <div class="fixed w-full bg-black">
    <nav class="responsive-container bg-black">
      <div class="flex justify-between">
        <a href="/" class="flex items-center gap-2 py-3 md:py-4">
          <NuxtImg class="h-5 lg:h-8" src="/the_balance_icon.svg" />
          <NuxtImg class="h-3 lg:h-5" src="/the_balance.svg" />
          <!-- TODO: Get the two images above as a single image -->
        </a>

        <div class="flex items-center gap-8">
          <a href="/" class="nav-link">Combat Jobs</a>
          <span class="nav-link">Newsfeed</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>
