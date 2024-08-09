<script>
let show = true;

function toggle() {
    show = !show;
}
</script>

<div class="size-32 bg-rose-600 flex justify-center items-center text-white">
    <span class="text-center">IM A MINI SANDBOX</span>
</div>

<button class="size-32 bg-blue " on:click="{toggle}">
    <span class={`text-center text-white ${show ? "" : "invisible"}`}>Show or hidden?</span>
</button>