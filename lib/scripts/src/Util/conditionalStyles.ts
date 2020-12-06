type ImportedClassList = { [hashed: string]: string };

type ClassValue = string | ClassCondition;

interface ClassCondition {
  [id: string]: any;
}

export function join(...styles: string[]): string {
  return styles.join(" ");
}

export function conditionalStyles(
  list: ImportedClassList
): (...classes: ClassValue[]) => string {
  const styles: ImportedClassList = list;

  return (...classes: ClassValue[]): string => {
    const classNames: string[] = [];

    classes.forEach((classValue: ClassValue) => {
      if (typeof classValue === "object") {
        Object.keys(classValue).forEach(cv => {
          if (classValue[cv]) {
            classNames.push(cv);
          }
        });
      } else if (typeof classValue === "string") {
        classNames.push(classValue);
      } else {
        throw new Error(
          "You can only pass typeof string | ClassCondition here!"
        );
      }
    });

    return classNames
      .map(cn => {
        if (styles.hasOwnProperty(cn)) {
          return styles[cn];
        } else {
          return cn;
        }
      })
      .join(" ");
  };
}
