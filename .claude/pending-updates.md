# Pending Updates

<!-- Сюда Claude записывает изменения, которые ещё не запушены.
     При команде "запушь в гит" — всё из этого файла идёт в коммит, затем файл очищается. -->

## Расы мира — полное наполнение из PDF-файлов

### Новые файлы
- `components/world/races/OborotniBody.tsx` — статья по оборотням с реальным содержимым (12 кланов, система форм, история)
- `components/world/races/SnezhnyeElfyBody.tsx` — статья по Снежным Эльфам (Нар'Элей, Ит'Нар, криомагия, 6 глав дневника, этикет)
- `components/world/races/VysshieElfyBody.tsx` — статья по Высшим Эльфам (Эльрэил, Коллегия Чародеев, Безграничная Библиотека)

### Изменённые файлы
- `components/world/races/DrowBody.tsx` — полностью переписан с реальным содержимым PDF (Илитиири, Аша'Кор, Хроники Клейма I-V, Ил'Сари и Кс'Вайр)
- `app/world/races/oborotni/page.tsx` — рефактор: клиентский компонент вынесен в OborotniBody
- `app/world/races/snezhnye-elfy/page.tsx` — использует SnezhnyeElfyBody
- `app/world/races/vysshie-elfy/page.tsx` — использует VysshieElfyBody
- `data/drow.ts` — обновлены quickFacts и sections согласно реальному содержимому
