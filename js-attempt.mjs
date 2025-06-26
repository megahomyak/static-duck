let compile = program => {

};

compile(get => {
    let set = get("set");
    set("duck", get("table maker")(field => {
        field("get_quack", get.function(ctx => {
            ctx.string("Quack!");
        }));
    }));
    set("human", get("table maker")(field => {
        field("get_quack", get.function(ctx => {
            ctx.string("*sips coffee instead*");
        }));
    }));
    set("print_quack", get.function(ctx => {
        ctx.get("print").call(ctx.get("ctx").get("get_quack").call(ctx.table(_field => {})));
    }));
    get("print_quack").call(get.get("duck"));
    get("print_quack").call(get.get("human"));
});
