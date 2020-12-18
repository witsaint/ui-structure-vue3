module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/test/**/*.[jt]s?(x)"],
  globals: {},
  transformIgnorePatterns: ["<rootDir>/node_modules"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/UI/$1'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node']
}
