from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'index.html')


@login_required
def members(request):
    print("usuário autenticado:", request.user)
    return render(request, 'members.html')
