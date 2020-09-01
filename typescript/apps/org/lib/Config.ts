declare const java: {
  lang: {
    Number: any,
    Boolean: any
  }
};

use([], () => {
  return {
    locale: "en",
    format: "en",
    replacer: (key: string, value: any) => {
      let returnValue = value;
      try {
        if (value.getClass() !== null) {
          if (value instanceof java.lang.Number) returnValue = 1 * value;
          else if (value instanceof java.lang.Boolean) returnValue = value.booleanValue();
          else returnValue = `${value}`;
        }
      } catch (err) {
        // not a java obj
      }

      return returnValue;
    },
  };
});
