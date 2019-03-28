decorator @logged {
  @wrap(f => {
    const name = f.name;
    function wrapped(...args) {
      console.log(`starting ${name} with arguments ${args.join(", ")}`);
      f.call(this, ...args);
      console.log(`ending ${name}`);
    }
    wrapped.name = name;
    return wrapped;
  })
}
