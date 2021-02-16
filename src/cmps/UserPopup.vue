<template>
    <sui-icon-group size="large">
    <sui-icon name="circle"  size="big" outline style="margin-right:0px" />
        <sui-popup hoverable name="popup" inline="true" class="popup" style="margin:0px" position="top center">
          <button >Logout</button>

    <sui-icon slot="trigger" name="user" />
        </sui-popup>
          </sui-icon-group>

</template>

<script>
export default {
    name:"UserPopup"

}
</script>

<style>

</style>