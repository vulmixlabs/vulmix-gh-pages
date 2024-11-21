<template>
  <div>
    <img src="/vulmix-gh-pages/a.png" :style="{height: '100px'}" />
    <img src="@assets/a.png" :style="{height: '100px'}" />

    <div
      :style="{
        backgroundImage: 'url(/vulmix-gh-pages/a.png)',
        backgroundSize: 'contain',
        width: '100px',
        height: '100px',
      }"
    ></div>

    <div
      :style="{
        backgroundImage: `url(${require('@assets/a.png')})`,
        backgroundSize: 'contain',
        width: '100px',
        height: '100px',
      }"
    ></div>

    <div>TEEEEEEEEEEEEEEEEEEXT</div>
  </div>
</template>
