const eelInit = window['eel']

eelInit.expose(hello)
function hello(x: any) {
    console.log(x)
}

export const eel: any = eelInit;
