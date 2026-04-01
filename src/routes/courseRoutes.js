import express from 'express'
import { home, getCreateCategoryForm, getCreateCourseForm, createCategory, createCourse, deleteCourse } from '../controller/courseController.js'


const router = express.Router()

router.get('/', home)


router.get('/category', getCreateCategoryForm) //Mostrar formulario de category
router.post('/create-category', createCategory) //Guarda el formulario de categorias


router.get('/create', getCreateCourseForm)//mostrar el formulario de cursos
router.post('/create-course', createCourse)//guardar el curso

router.post('/eliminar/:id', deleteCourse) //ruta para eliminar un curso


export default router