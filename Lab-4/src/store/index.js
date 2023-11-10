import { createStore } from "vuex";

function checkCompany(comp, filter) {
  for (const key in filter) {
    if (filter[key] && filter[key] !== comp[key]) return false;
  }
  return true;
}

export default createStore({
  state: {
    tradeCompanies: [
      {
        name: "Магазин 'Продукти24'",
        address: "вул. Головна, 123",
        phone: "+380123456789",
        specialization: "продукти",
        workingHours: "Пн-Пт: 8:00-20:00, Сб-Нд: 9:00-18:00",
      },
      {
        name: "Електроніка Центр",
        address: "вул. Технічна, 45",
        phone: "+380987654321",
        specialization: "електроніка",
        workingHours: "Пн-Сб: 9:00-21:00",
      },
      {
        name: "Одяг та Мода",
        address: "вул. Модна, 67",
        phone: "+380567890123",
        specialization: "одяг і взуття",
        workingHours: "Пн-Пт: 10:00-19:00, Сб: 10:00-16:00",
      },
      {
        name: "Магазин 'Техніка Імперія'",
        address: "вул. Технічна, 12",
        phone: "+380111223344",
        specialization: "техніка",
        workingHours: "Пн-Сб: 9:00-20:00, Нд: 10:00-18:00",
      },
      {
        name: "Будмагазин 'Будівельник'",
        address: "вул. Будівельна, 56",
        phone: "+380555667788",
        specialization: "будівельні матеріали",
        workingHours: "Пн-Пт: 7:30-19:30, Сб: 8:00-16:00",
      },
      {
        name: "Аптека 'Здоров'я'",
        address: "вул. Лікарська, 3",
        phone: "+380999888777",
        specialization: "аптека",
        workingHours: "Пн-Сб: 9:00-20:00, Нд: 10:00-17:00",
      },
      {
        name: "Кав'ярня 'Аромат'",
        address: "вул. Кавова, 8",
        phone: "+380444555666",
        specialization: "кафе",
        workingHours: "Пн-Нд: 8:00-22:00",
      },
      {
        name: "Книжковий магазин 'Читай-Гуляй'",
        address: "вул. Книжкова, 21",
        phone: "+380222111000",
        specialization: "книги",
        workingHours: "Пн-Пт: 9:30-19:30, Сб: 10:00-18:00",
      },
      {
        name: "Спортивний магазин 'СпортМайстер'",
        address: "вул. Спортивна, 5",
        phone: "+380888777666",
        specialization: "спорттовари",
        workingHours: "Пн-Сб: 10:00-20:00",
      },
      {
        name: "Автомагазин 'АвтоСвіт'",
        address: "вул. Автомобільна, 34",
        phone: "+380777666555",
        specialization: "автозапчастини",
        workingHours: "Пн-Пт: 8:30-18:30, Сб: 9:00-15:00",
      },
    ],
    filterObj: {},
  },
  getters: {
    getCompanies: ({ tradeCompanies, filterObj }) =>
      tradeCompanies.filter((comp) => checkCompany(comp, filterObj)),
    getCompanyByName: (state) => {
      return (companyName) =>
        state.tradeCompanies.find((comp) => comp.name == companyName);
    },
  },
  mutations: {
    addCompany(state, company) {
      state.tradeCompanies.push(company);
    },
    updateCompany(state, company) {
      const companyIndex = state.tradeCompanies.findIndex(
        (comp) => comp.id == company.id
      );
      state.tradeCompanies[companyIndex] = company;
    },
    updateFilter(state, filter) {
      state.filterObj = filter;
    },
    removeCompanyByName(state, companyName) {
      state.tradeCompanies = state.tradeCompanies.filter(
        (comp) => comp.name !== companyName
      );
    },
  },
  actions: {
    deleteCompany({ commit }, idToRemove) {
      commit("removeCompany", idToRemove);
    },
    onAddCompany({ commit }, companyObj) {
      commit("addCompany", {
        id: new Date().getTime(),
        ...companyObj,
      });
    },
    onUpdateCompany({ commit }, company) {
      commit("updateCompany", company);
    },
    onUpdateFilter({ commit }, filter) {
      commit("updateFilter", filter);
    },
    onDeleteCompany({ commit }, companyName) {
      commit("removeCompanyByName", companyName);
    },
  },
  modules: {},
});
