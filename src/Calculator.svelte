<script>
    import { Icon, Backspace } from 'svelte-hero-icons'

    let calc = ''

    function pushSymbol(symbol) {
        calc = calc + symbol
    }

    function clearCalc() {
        calc = ''
    }

    function clearLast() {
        calc = calc.slice(0, -1)
    }

    function execCalc() {
        try {
            calc = eval(calc) ?? ''
        } catch (err) {
            calc = ''
            console.error(err)
        }
    }
</script>

<main class="h-screen w-screen flex justify-center items-center flex-col">
    <div class="flex flex-grow justify-end items-end w-full p-4">
        <div class="text-5xl font-bold">{calc}</div>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-8 w-full p-4">
        <button class="btn h-16 text-2xl" on:click={() => clearCalc()}>C</button>
        <button class="btn h-16 text-3xl" on:click={() => pushSymbol('/')}>÷</button>
        <button class="btn h-16 text-3xl" on:click={() => pushSymbol('*')}>×</button>
        <button class="btn h-16 text-2xl" on:click={() => clearLast()}>
            <Icon src={Backspace} class="w-6 h-6 mx-auto"/>
        </button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('7')}>7</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('8')}>8</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('9')}>9</button>
        <button class="btn h-16 text-3xl" on:click={() => pushSymbol('-')}>-</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('4')}>4</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('5')}>5</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('6')}>6</button>
        <button class="btn h-16 text-3xl" on:click={() => pushSymbol('+')}>+</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('1')}>1</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('2')}>2</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('3')}>3</button>
        <button class="btn btn-accent h-auto text-2xl row-span-2" on:click={() => execCalc()}>=</button>
        <button class="btn btn-ghost h-16 text-2xl opacity-0" disabled></button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('0')}>0</button>
        <button class="btn h-16 text-2xl" on:click={() => pushSymbol('.')}>.</button>
    </div>
</main>
