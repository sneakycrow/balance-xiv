<template>
  <div>
    <RoleBanner />
    <RoleHeader />
  </div>
</template>

<script lang="ts" setup>
import { RoleEnum } from "~/types/enums/RoleEnum";

definePageMeta({
  layout: "job",
  validate: async (route) => {
    const { role } = route.params;
    return role in RoleEnum;
  },
});
</script>

<style></style>
