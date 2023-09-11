const { tambahBooksHandler, getAllBookshelfHandler, getByIdBookshelfHandler, editBookshelfHandler, hapusBookshelfHandler } = require('./handler')

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
    path: '/bookshelf',
    handler: tambahBooksHandler
  },
  {
    method: 'GET',
    path: '/bookshelf',
    handler: getAllBookshelfHandler
  },
  {
    method: 'GET',
    path: '/bookshelf/{idBuku}',
    handler: getByIdBookshelfHandler
  },
  {
    method: 'PUT',
    path: '/bookshelf/{idBuku}',
    handler: editBookshelfHandler
  },
  {
    method: 'DELETE',
    path: '/bookshelf/{idBuku}',
    handler: hapusBookshelfHandler
  }

]

module.exports = routes
