import build from "babel-helper-builder-binary-assignment-operator-visitor";

export default function ({ types: t }) {
  return {
    inherits: require("babel-plugin-syntax-qq-operator"),

    visitor: build({
      operator: "??",

      build(left, right) {
        return t.conditionalExpression(
          t.binaryExpression("===", left, t.identifier("undefined")),
          left,
          right
        );
      }
    })
  };
}
