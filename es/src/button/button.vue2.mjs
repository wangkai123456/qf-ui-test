import { defineComponent as e, ref as o, openBlock as a, createElementBlock as c, toDisplayString as r } from "vue";
const s = e({ name: "qf-button" }), f = /* @__PURE__ */ e({
  ...s,
  setup(l) {
    const t = o(1), n = () => {
      t.value += 1;
    };
    return (_, u) => (a(), c("button", {
      class: "btn",
      onClick: n
    }, "按钮组件-" + r(t.value), 1));
  }
});
export {
  f as default
};
