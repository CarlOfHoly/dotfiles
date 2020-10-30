call plug#begin()
Plug 'arcticicestudio/nord-vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'junegunn/gv.vim'
Plug 'airblade/vim-rooter'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-rhubarb'
Plug 'mhinz/vim-signify'
Plug 'norcalli/nvim-colorizer.lua'
call plug#end()

set termguicolors
colorscheme nord
let mapleader=" "

let g:coc_global_extensions = [
	\ 'coc-tsserver',
	\ 'coc-eslint'
	\ ]

source $HOME/.config/nvim/plug-config/coc.vim
source $HOME/.config/nvim/plug-config/fzf.vim
luafile $HOME/.config/nvim/lua/plug-colorizer.lua

set expandtab
set smarttab
set shiftwidth=2
set softtabstop=2
set tabstop=2
