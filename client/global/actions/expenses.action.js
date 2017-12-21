import db from '../../services/database'
import moment from "moment/moment";

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const LOAD_EXPENSES = 'LOAD_EXPENSES'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadExpenses() {

    return {
        type: LOAD_EXPENSES,
        payload: db.expenses.orderBy('date').reverse().with({category: 'category_id'})
    }
}

export function addExpense(form) {

    const category = JSON.parse(form.category.value)


    const expense = {
        name: !form.name.value.length ? form.name.value : form.name.placeholder,
        category_id: parseInt(category.id),
        amount: -parseFloat(form.amount.value),
        category: category,
        date: moment().toISOString()
    }

    db.table('expenses').add(expense)

    return {
        type: ADD_EXPENSE,
        payload: expense
    }
}

export function deleteExpense(expense) {

    db.table('expenses').where('id').equals(expense.id).delete()

    return {
        type: DELETE_EXPENSE,
        payload: expense
    }
}

export function loadCategories() {

    return {
        type: LOAD_CATEGORIES,
        payload: db.table('categories').toArray()
    }
}