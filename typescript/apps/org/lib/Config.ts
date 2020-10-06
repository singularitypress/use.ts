use([], () => {
  const Node = Packages.javax.jcr.Node;

  const replacer = (key: string, value: any) => {
    let returnValue = value;
    try {
      if (value.getClass() !== null) {
        if (value instanceof java.lang.Number) returnValue = 1 * value;
        else if (value instanceof java.lang.Boolean) returnValue = value.booleanValue();
        else returnValue = `${value}`;
      }
    } catch (err) {
      returnValue = err;
    }

    return returnValue;
  };

  const dynamicId = (start: string) => {
    const unit = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1);
    return `${start}-${unit()}${unit()}-${unit()}-${unit()}-${unit()}-${unit()}${unit()}${unit()}`;
  };

  return {
    locale: "en",
    format: "en",
    replacer,
    dynamicId,
  };
});
