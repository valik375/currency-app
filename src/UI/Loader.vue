<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--background);
}
.loader__spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite
}
.loader__spinner::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 5px solid var(--foreground);
  animation: prixClipFix 2s linear infinite ;
}
@keyframes rotate {
  100%   {transform: rotate(360deg)}
}
@keyframes prixClipFix {
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
  100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>