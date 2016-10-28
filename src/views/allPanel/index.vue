<style>
</style>

<template>
	<div>
    <addMusicPanel></addMusicPanel>
    <addLoadingPanel></addLoadingPanel>
    <changeMusicPanel></changeMusicPanel>
  </div>
</template>

<script>
import addMusicPanel from './add_music_panel'
import addLoadingPanel from './add_loading_panel'
import changeMusicPanel from './change_music_panel'
export default {
  components: {addMusicPanel, addLoadingPanel, changeMusicPanel}
}
</script>