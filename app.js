const sections = document.querySelectorAll('.page-section');
const btnS = document.querySelectorAll('.link');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const glass = document.querySelector('.glass');
const modal = document.querySelector('.modal');


btnS.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        const dataId = clickedBtn.getAttribute('data-id')
        sections.forEach(section => {
            if (section.id === dataId) {
                section.classList.remove('d-none');
                section.classList.add('fade-in');
            } else {
                section.classList.add('d-none')
            }
        })
    })
})

portfolioCards.forEach(pCard => {
    pCard.addEventListener('click', (e) => {
        const clickedCard = e.target;
        const cardDataId = clickedCard.getAttribute('data-id');
        glass.classList.add('modal-glass');
        modal.classList.remove('d-none');

        const portfolioCards = [
            {
                title: 'Card 1',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-dictionary.png'
            },
            {
                title: 'Card 2',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-frontend-mentor.png'
            },
            {
                title: 'Card 3',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-todo-list-1.png'
            },
            {
                title: 'Card 4',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-memory-game-instruments.png'
            },
            {
                title: 'Card 5',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-balett-landing-page.png'
            },
            {
                title: 'Card 6',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-todo-list-2.png'
            },
            {
                title: 'Card 7',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-todo-list-1.png'
            },
            {
                title: 'Card 8',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-dictionary.png'
            },
            {
                title: 'Card 9',
                text: 'Lorem ipsum dolor sit, amet consectedelectus dignissimos eos impedit, labore quam corporis tempora nostrum reiciendis! Modi natus quasi autem, accusamus dolorum laboriosam, veritatis dicta quae deserunt placeat, ea itaque rerum non at eaque veniam nobis quisquam maiores magnam corrupti illum inventore voluptatibus eum. Numquam, provident molestiae sed soluta facilis earum autem dignissimos cum.',
                img: 'images/portfolio/portfolio-frontend-mentor.png'
            },
            

        ];

        const modalInner = `
            <h2>${portfolioCards[cardDataId].title}</h2>
            <div class="modal-text">
                <p>${portfolioCards[cardDataId].text}</p>
            </div>
            <div class="modal-img-div">
                <img src="${portfolioCards[cardDataId].img}" alt="">
            </div>
            <div class="modal-buttons">
                <button class="modal-btn site">Live Site</button>
                <button class="modal-btn github">GitHub</button>
            </div>
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
            `;

        modal.innerHTML = modalInner;

        modal.addEventListener("click", (e) => {
            if(!e.target.classList.contains('modal-btn')) {
                glass.classList.remove('modal-glass');
                modal.classList.add('d-none');
            }
        })
    })
})