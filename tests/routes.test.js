const request = require('supertest')
const app = require('../index')
describe('Articles Endpoints', () => {
    it('should list a articles', async () => {
        const res = await request(app)
            .get('/api_v1.0/articles?page=1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    }),

        it('should get an article content', async () => {
            const res = await request(app)
                .get('/api_v1.0/articles/2')
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('data')
        }),

        it('should post a new article', async () => {
            const res = await request(app)
                .post('/api_v1.0/articles')
                .send({
                    nickname: 'article 4',
                    title: 'Sparrow 4',
                    content: 'Content for article 4'
                })
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('message')
        })
})

describe('Comments Endpoint', () => {
    it('should post comment on article', async () => {
        const res = await request(app)
            .post('/api_v1.0/comments/on-article')
            .send({
                article_id: 2,
                nickname: 'comment nickename',
                content: 'comment on article'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    }),

        it('should post comment on comment', async () => {
            const res = await request(app)
                .post('/api_v1.0/comments/on-comment')
                .send({
                    article_id: 2,
                    comment_id: 1,
                    nickname: 'comment nickename',
                    content: 'comment on article'
                })
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('message')
        }),

        it('should get a comment on article', async () => {
            const res = await request(app)
                .get('/api_v1.0/comments/on-article/2')
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('data')
        })

})