import { mount } from "@vue/test-utils";
import ProvidersView from "@/views/ProvidersView.vue";
import ProvidersIndex from "@/components/providers/ProvidersIndex.vue";
import type { IProvider } from "@/interfaces/IProvider";
import { describe, expect, test, it } from "vitest";

describe("ProvidersView.vue", () => {
  test("The view renders the correct component", () => {
    const wrapper = mount(ProvidersView);
    expect(wrapper.html()).toContain("providers-table");
    wrapper.unmount();
  });
});

describe("ProvidersIndex.vue", () => {
  const wrapper = mount(ProvidersIndex);
  test("If it renders the div class for the table", () => {
    expect(wrapper.classes("providers-table")).toBe(true);
  });

  test("If it renders the a-table component", () => {
    const table = wrapper.find("a-table");
    expect(table.exists()).toBe(true);
  });

  describe("Testing the data fetching", () => {
    let promise: IProvider[];
    test("If the component fetch the data", async () => {
      await wrapper.vm.fetchProviders();
      promise = wrapper.vm.providersData;
      expect(promise).to.exist;
      expect(promise).length.to.be.greaterThanOrEqual(1);
    });

    test("If the data fetched is the correct expected data", () => {
      const sampleObj = {
        access_group_name: "Abono",
        access_group_id: 1,
        total_uses: 0,
        sessions: [
          {
            name: "01-ABONO",
            id: 19,
          },
        ],
        event_id: 1,
        structure_decode: false,
        name: "TKT CE ABONO 95",
        modified: "2017-05-30T17:42:27.000Z",
        id: 78,
        basic_product_id: 27,
      };
      expect(promise[0]).toMatchObject(sampleObj);
    });
  });
});
