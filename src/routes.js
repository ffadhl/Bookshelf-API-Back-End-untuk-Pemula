const { addBooksHandler, getAllBooksHandler, getByIdBooksHandler, editBooksHandler, deleteBooksHandler } = require('./handler')

const routes = [
  {
    method: '*',
    path: '/',
    handler: () => {
      return 'Halaman tidak dapat diakses dengan method tersebut'
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Homepage'
    }
  },
  {
    method: 'GET',
    path: '/about',
    handler: () => {
      return 'About page'
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => {
      return 'Halaman tidak ditemukan'
    }
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByIdBooksHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler
  }

]

module.exports = routes
