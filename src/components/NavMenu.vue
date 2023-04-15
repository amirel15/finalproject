<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/deparment">Departments</RouterLink>
    <RouterLink to="/faculty">Faculty</RouterLink>
    <RouterLink to="/student">Student</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
