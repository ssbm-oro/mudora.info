<script lang="ts">
    import {items, locations} from "$lib/alttpr-customizer-schema.json"
    let search: string;

    $: tabletItems = items.filter(item => filterItemsByTabletText(item, search))

    function filterItemsByTabletText(item: { name: string, tablet_text: string, pretty_name?: string }, search: string) {
        if (search) {
            const name = item.pretty_name || item.name;
            const itemTokens: string[] = item.tablet_text.split(/[ ,-]+/).map(s => s.toLowerCase());
            itemTokens.push(name);
            const searchTokens = search.split(/[ ,-]+/).map(s => s.toLowerCase());
            return searchTokens.every(searchToken => itemTokens.some(itemToken => itemToken.includes(searchToken)));
        }
        return true;
    }
</script>

<div class="flex flex-col">
    <div>
        <h1 class="p-8 text-primary-500 text-center font-serif text-6xl 
        text-shadow-lg tracking-widest drop-shadow-2xl select-none">
            The eBook Of Mudora
        </h1>
    </div>
    <div class="flex flex-row justify-center h-max">
        <div class="rounded-lg m-4 p-4 drop-shadow-2xl basis-3/4 bg-[url('/paper.jpg')] bg-cover min-h-min border-4 border-primary-500">
            <p class="p-4 m-8 first-line:uppercase first-line:tracking-widest text-xl
            first-letter:text-7xl first-letter:font-bold first-letter:text-primary-500
            first-letter:mr-3 leading-relaxed first-letter:float-left font-serif">
                "The monoliths left by the Hylian people are inscribed with
                ancient script. If you find an inscription you cannot read,
                use this book and its meaning will become clear."
                <br><br>
                The Book of Mudora is an ancient Hylian text that Link
                used to translate ancient Hylian. On this site, you can
                translate the cryptic tablet and pedestal hints from
                A Link to the Past Randomizer!
                <br><br>
                Type the text that appears when you use the Book of Mudora
                on either of the tablets or the Master Sword Pedestal.
            </p>
            <input type="search" placeholder="e.g. You have chosen the Archer class" class="bg-slate-300" bind:value={search}>
            <div class="m-4 p-4 grid grid-cols-3">
                {#if search && search.length > 3 && tabletItems}
                    {#each tabletItems as item}
                        <p class="font-ganon m-8 p-4 rounded-lg border-4 border-white bg-black text-white text-3xl whitespace-normal w-48">
                            <span style="-webkit-text-stroke: 1px blue; color: white; font-size: 30px;">{@html item.tablet_text.replaceAll('\n','<br>')}</span>
                        </p>
                        <div class="justify-self-center flex flex-row -space-x-6 grow py-4">
                            {#if item.images}
                                {#each item.images as image}
                                    <div>
                                        <img src={image} alt="{item.pretty_name}" class="aspect-auto h-48">
                                    </div>
                                {/each}
                            {/if}
                        </div>
                        <p class="place-self-center font-serif text-3xl">{item.pretty_name ?? item.name}</p>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
    <div class="m-4 my-8 text-center drop-shadow-2xl">
        <iconify-icon icon="mdi:triforce" class="text-primary-500" height="256"></iconify-icon>
    </div>
</div>

<style>
img {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
</style>