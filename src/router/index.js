import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/views/login/login'
import Index from '@/views/index/index'
import Cart from '@/views/cart/cart'
import Machine from '@/views/machine/machine'
import Product from '@/views/product/product'
import Detail from '@/views/detail/detail'
import User from '@/views/user/user'
import Photo from '@/views/photo/index'
import Logistics from '@/views/logistics/info'
import Suggest from '@/views/Suggest/index'
import Invoice from '@/views/invoice/index'


import Order from '@/views/order/index'
import AllOrder from '@/views/order/children/AllOrder'
import NoPay from '@/views/order/children/NoPay'
import NoSend from '@/views/order/children/NoSend'
import Sended from '@/views/order/children/Sended'
import Refund from '@/views/order/children/Refund'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    redirect: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/logistics',
      name: 'Logistics',
      component: Logistics
    },
    {
      path: '/suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/invoice',
      name: 'Invoice',
      component: Invoice
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: 'allorder',
          name: 'AllOrder',
          component: AllOrder
        },
        {
          path: 'nopay',
          name: 'NoPay',
          component: NoPay
        },
        {
          path: 'nosend',
          name: 'NoSend',
          component: NoSend
        },
        {
          path: 'sended',
          name: 'Sended',
          component: Sended
        },
        {
          path: 'refund',
          name: 'Refund',
          component: Refund
        },
      ]
    },
  ]
})
