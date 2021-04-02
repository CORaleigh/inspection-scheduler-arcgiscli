import InspectionScheduleViewModel from "../../../../src/widgets/InspectionSchedule/InspectionScheduleViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/InspectionSchedule/InspectionScheduleViewModel", () => {
  let vm: InspectionScheduleViewModel;

  beforeEach(() => {
    vm = new InspectionScheduleViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
