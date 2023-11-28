export default function createReportObject(employeesList) {
    const allEmployees = {
        ...employeesList,
    };

    const getNumberOfDepartments = function () {
        return Object.keys(allEmployees).length;
    };

    return {
        allEmployees,
        getNumberOfDepartments,
    };
}
