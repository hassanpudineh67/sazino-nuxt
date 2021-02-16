import { shallowMount } from "@vue/test-utils";
import Btn from "../components/core/button/btn";


const factory = () => {
      return shallowMount(Btn, {
      });
};

describe("Btn", () => {
      test("mounts properly", () => {
            const wrapper = factory();
            expect(wrapper.isVueInstance()).toBeTruthy();
      });

      test("renders properly", () => {
            const wrapper = factory();
            expect(wrapper.html()).toMatchSnapshot();
      });
});