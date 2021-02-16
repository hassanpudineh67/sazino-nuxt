export const state = () => ({
      device : ''
})

export const mutations = {
      setDevice(state, device) {
            state.device = device;
      }
}