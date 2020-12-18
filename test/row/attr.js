import { mount } from "@vue/test-utils";
import Row from "@/components/row/index.vue";

describe("Row.vue", () => {
  it("title props", () => {
    const wrapper = mount(Row, {
      props: {
        title: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world')
  });
});
