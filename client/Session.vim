let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/Projects/JavaScript/artfea/client
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/Documents/Projects/JavaScript/artfea/client/src/App.css
badd +1 ~/Documents/Projects/JavaScript/artfea/client/src/index.css
badd +3 ~/Documents/Projects/JavaScript/artfea/client/src/App.tsx
badd +6 ~/Documents/Projects/JavaScript/artfea/client/src/components/art.tsx
badd +3 ~/Documents/Projects/JavaScript/artfea/client/src/pages/Gallery.tsx
badd +12 ~/Documents/Projects/JavaScript/artfea/client/vite.config.ts
badd +13 ~/Documents/Projects/JavaScript/artfea/client/src/components/paintbox.tsx
badd +7 ~/Documents/Projects/JavaScript/artfea/client/src/components/nav.tsx
badd +3 ~/Documents/Projects/JavaScript/artfea/client/src/components/paintbox.css
badd +2 ~/Documents/Projects/JavaScript/artfea/client/src/pages/Gallery.css
badd +10 ~/Documents/Projects/JavaScript/artfea/client/src/main.tsx
badd +4 ~/Documents/Projects/JavaScript/artfea/client/src/routes.tsx
badd +7 ~/Documents/Projects/JavaScript/artfea/client/src/components/nav.css
argglobal
%argdel
edit ~/Documents/Projects/JavaScript/artfea/client/src/pages/Gallery.tsx
argglobal
balt ~/Documents/Projects/JavaScript/artfea/client/src/components/paintbox.css
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 8 - ((7 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 026|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
